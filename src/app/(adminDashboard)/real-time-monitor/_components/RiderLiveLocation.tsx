"use client"

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { useCallback, useState } from "react"
// import { google } from "google-maps"

const containerStyle = {
  width: "100%",
  height: "400px",
}

const center = {
  lat: 23.72,
  lng: 90.39,
}

// Mock data for riders with status
const riders = [
  { id: 1, lat: 23.76, lng: 90.39, name: "John Smith", status: "available" },
  { id: 2, lat: 23.72, lng: 90.40, name: "Sarah Johnson", status: "active" },
  { id: 3, lat: 23.72, lng: 90.41, name: "Mike Davis", status: "active" },
  { id: 4, lat: 23.73, lng: 90.39, name: "Emily Chen", status: "available" },
  { id: 5, lat: 23.72, lng: 90.39, name: "David Wilson", status: "pending" },
  { id: 6, lat: 23.74, lng: 90.38, name: "Alex Brown", status: "active" },
  { id: 7, lat: 23.71, lng: 90.42, name: "Lisa Wong", status: "pending" },
  { id: 8, lat: 23.75, lng: 90.40, name: "James Miller", status: "available" },
]

// Helper function to get marker color based on status
const getMarkerColor = (status: string): string => {
  switch (status) {
    case "available":
      return "#16a34a" // Green
    case "active":
      return "#2563eb" // Blue
    case "pending":
      return "#dc2626" // Red
    default:
      return "#6b7280" // Gray
  }
}

// Helper function to get marker SVG
const createMarkerSVG = (color: string, isTriangle: boolean): string => {
  if (isTriangle) {
    // Triangle for available riders
    return `
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="16,4 28,26 4,26" fill="${color}" stroke="white" strokeWidth="2"/>
      </svg>
    `
  } else {
    // Circle for active and pending
    return `
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="12" fill="${color}" stroke="white" strokeWidth="2"/>
      </svg>
    `
  }
}

export function RiderLiveLocation() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY!, // Placeholder for API key
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map: any) {
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null)
  }, [])

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">Live Rider Locations</CardTitle>
        <CardDescription className="text-[#6A7282]">Real-time tracking of all active riders</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="rounded-lg overflow-hidden border">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={14}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={{
                  styles: [
                    {
                      featureType: "all",
                      elementType: "labels",
                      stylers: [{ visibility: "on" }],
                    },
                    {
                      featureType: "water",
                      elementType: "geometry",
                      stylers: [{ color: "#e8e8e8" }],
                    },
                    {
                      featureType: "landscape",
                      elementType: "geometry",
                      stylers: [{ color: "#f5f5f5" }],
                    },
                    {
                      featureType: "road",
                      elementType: "geometry",
                      stylers: [{ color: "#ffffff" }],
                    },
                  ],
                  disableDefaultUI: true,
                  zoomControl: true,
                }}
              >
                {riders.map((rider) => {
                  const isAvailable = rider.status === "available"
                  const color = getMarkerColor(rider.status)
                  const svgString = createMarkerSVG(color, isAvailable)
                  const dataUrl = `data:image/svg+xml;base64,${btoa(svgString)}`

                  return (
                    <Marker
                      key={rider.id}
                      position={{ lat: rider.lat, lng: rider.lng }}
                      icon={{
                        url: dataUrl,
                        scaledSize: new google.maps.Size(32, 32),
                      }}
                      title={`${rider.name} - ${rider.status}`}
                    />
                  )
                })}
              </GoogleMap>
            ) : (
              <div className="h-[400px] w-full bg-muted animate-pulse flex items-center justify-center">
                Loading Map...
              </div>
            )}
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-600 rounded-full"></div>
              <span>Available Riders</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              <span>Active Pickups</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-600 rounded-full"></div>
              <span>Pending Pickups</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
