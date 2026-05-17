"use client"

import * as React from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"

import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const data = [
  { day: "Mon", mins: 8 },
  { day: "Tue", mins: 5 },
  { day: "Wed", mins: 13 },
  { day: "Thu", mins: 7 },
  { day: "Fri", mins: 3 },
  { day: "Sat", mins: 14 },
  { day: "Sun", mins: 12 },
]

export const AvgPickupTimeCard = ({ className }: { className?: string }) => {
  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>Avg Pickup Time (minutes)</CardTitle>
            {/* <CardDescription>Track pickup time trends</CardDescription> */}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer
          id="avg-pickup-time"
          config={{ mins: { color: "#10b981", label: "Minutes" } }}
          className="h-[220px] w-full"
        >
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.6} />
              <XAxis dataKey="day" tickLine={false} />
              <YAxis tickLine={false} />
              <ChartTooltipContent />
              <Line
                type="monotone"
                dataKey="mins"
                stroke="var(--color-mins)"
                strokeWidth={3}
                dot={{ r: 4, strokeWidth: 3, fill: "#fff" }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default AvgPickupTimeCard
