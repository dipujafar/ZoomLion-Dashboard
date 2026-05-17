"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

const riders = [
  {
    id: 1,
    name: "John Smith",
    status: "Busy",
    avatar: "/thoughtful-man-portrait.png",
    statusColor: "bg-blue-100 text-blue-700 border-blue-200",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    status: "Available",
    avatar: "/woman-portrait.png",
    statusColor: "bg-green-100 text-green-700 border-green-200",
  },
  {
    id: 3,
    name: "Mike Davis",
    status: "Busy",
    avatar: "/thoughtful-man-portrait.png",
    statusColor: "bg-blue-100 text-blue-700 border-blue-200",
  },
  {
    id: 4,
    name: "Emily Chen",
    status: "Available",
    avatar: "/woman-portrait-2.png",
    statusColor: "bg-green-100 text-green-700 border-green-200",
  },
  {
    id: 5,
    name: "David Wilson",
    status: "Offline",
    avatar: "/man-portrait-3.png",
    statusColor: "bg-gray-100 text-gray-700 border-gray-200",
  },
]

export function ActiveRiderList() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="text-xl">Active Riders</CardTitle>
        <CardDescription className="text-[#6A7282]">Current status of all riders</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {riders.map((rider) => (
              <div
                key={rider.id}
                className="flex items-center justify-between p-4 rounded-xl border bg-card hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={rider?.avatar || "/placeholder.svg"} alt={rider?.name} />
                    <AvatarFallback>{rider?.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium text-sm">{rider?.name}</span>
                </div>
                <Badge
                  variant="outline"
                  className={`${rider?.statusColor} font-normal px-3 py-0.5 rounded-full text-[11px]`}
                >
                  {rider?.status}
                </Badge>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
