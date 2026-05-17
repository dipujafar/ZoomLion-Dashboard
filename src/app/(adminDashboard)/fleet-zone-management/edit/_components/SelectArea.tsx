"use client"

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  DrawingManager,
  Polygon,
} from "@react-google-maps/api"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { useCallback, useState } from "react"

const containerStyle = {
  width: "100%",
  height: "450px",
}

const center = {
  lat: 23.72,
  lng: 90.39,
}

// Mock riders
const riders = [
  { id: 1, lat: 23.76, lng: 90.39, name: "John Smith", status: "available" },
  { id: 2, lat: 23.72, lng: 90.4, name: "Sarah Johnson", status: "active" },
  { id: 3, lat: 23.72, lng: 90.41, name: "Mike Davis", status: "active" },
  { id: 4, lat: 23.73, lng: 90.39, name: "Emily Chen", status: "available" },
]

// marker color helper
const getMarkerColor = (status: string) => {
  switch (status) {
    case "available":
      return "#16a34a"
    case "active":
      return "#2563eb"
    case "pending":
      return "#dc2626"
    default:
      return "#6b7280"
  }
}

// SVG marker
const createMarkerSVG = (color: string, triangle: boolean) => {
  if (triangle) {
    return `
    <svg width="32" height="32" viewBox="0 0 32 32">
      <polygon points="16,4 28,26 4,26" fill="${color}" stroke="white" stroke-width="2"/>
    </svg>`
  }

  return `
  <svg width="32" height="32" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="12" fill="${color}" stroke="white" stroke-width="2"/>
  </svg>`
}

export function SelectArea() {

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: ["drawing"],
  })

  const [map, setMap] = useState<google.maps.Map | null>(null)
  const [polygonPath, setPolygonPath] = useState<google.maps.LatLngLiteral[]>([])

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map)
  }, [])

  const onUnmount = useCallback(() => {
    setMap(null)
  }, [])

  // when drawing finished
  const onPolygonComplete = (polygon: google.maps.Polygon) => {

    const path = polygon.getPath().getArray().map((latLng) => ({
      lat: latLng.lat(),
      lng: latLng.lng(),
    }))

    setPolygonPath(path)

    // remove drawing polygon
    polygon.setMap(null)

    console.log("Selected Zone:", path)
  }

  const clearZone = () => {
    setPolygonPath([])
  }

  return (
    <Card className="w-full">

      <CardHeader>
        <CardTitle>Zone Boundary Map</CardTitle>
        <CardDescription>Select delivery/service area</CardDescription>
      </CardHeader>

      <CardContent>

        {/* Buttons */}
        <div className="flex gap-3 mb-3">
          <button
            onClick={clearZone}
            className="px-3 py-1 bg-red-500 text-white rounded"
          >
            Clear
          </button>
        </div>

        <div className="rounded-lg overflow-hidden border">

          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={13}
              onLoad={onLoad}
              onUnmount={onUnmount}
              options={{
                disableDefaultUI: true,
                zoomControl: true,
              }}
            >

              {/* Drawing Tool */}
              <DrawingManager
                onPolygonComplete={onPolygonComplete}
                options={{
                  drawingControl: true,
                  drawingControlOptions: {
                    position: google.maps.ControlPosition.TOP_CENTER,
                    // @ts-ignore
                    drawingModes: ["polygon"],
                  },
                  polygonOptions: {
                    fillColor: "#facc15",
                    fillOpacity: 0.35,
                    strokeColor: "#f59e0b",
                    strokeWeight: 2,
                    editable: true,
                    draggable: false,
                    zIndex: 1,
                  },
                }}
              />

              {/* Drawn Zone */}
              {polygonPath.length > 0 && (
                <Polygon
                  paths={polygonPath}
                  options={{
                    fillColor: "#facc15",
                    fillOpacity: 0.35,
                    strokeColor: "#f59e0b",
                    strokeWeight: 2,
                  }}
                />
              )}

              {/* Rider markers */}
              {riders.map((rider) => {

                const isAvailable = rider.status === "available"
                const color = getMarkerColor(rider.status)

                const svg = createMarkerSVG(color, isAvailable)

                const icon = {
                  url: `data:image/svg+xml;base64,${btoa(svg)}`,
                  scaledSize: new google.maps.Size(32, 32),
                }

                return (
                  <Marker
                    key={rider.id}
                    position={{ lat: rider.lat, lng: rider.lng }}
                    icon={icon}
                    title={`${rider.name} - ${rider.status}`}
                  />
                )
              })}

            </GoogleMap>

          ) : (
            <div className="h-[450px] flex items-center justify-center">
              Loading Map...
            </div>
          )}

        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 text-sm mt-4">

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

      </CardContent>

    </Card>
  )
}