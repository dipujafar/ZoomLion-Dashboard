"use client"

import * as React from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"

import {
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

const data = [
  { hour: "6AM", pickups: 10 },
  { hour: "8AM", pickups: 30 },
  { hour: "10AM", pickups: 45 },
  { hour: "12PM", pickups: 65 },
  { hour: "2PM", pickups: 90 },
  { hour: "4PM", pickups: 78 },
  { hour: "6PM", pickups: 55 },
  { hour: "8PM", pickups: 30 },
]

export const PickupsPerHourCard = ({ className }: { className?: string }) => {
  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>Pickups Per Hour</CardTitle>
            {/* <CardDescription>Compare pickups by hour</CardDescription> */}
          </div>
        </div>
      </CardHeader>
      <CardContent className="">
        <ChartContainer
          id="pickups-hour"
          config={{ pickups: { color: "#3b82f6", label: "Pickups" } }}
          className="h-[220px] w-full"
        >
          <ResponsiveContainer>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.6} />
              <XAxis dataKey="hour" tickLine={false} />
              <YAxis tickLine={false} />
              <ChartTooltipContent />
              <Bar dataKey="pickups" fill="var(--color-pickups)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default PickupsPerHourCard
