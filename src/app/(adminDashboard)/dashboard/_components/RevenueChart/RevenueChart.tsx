"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PeriodToggle } from "./PeriodToggle"


const weeklyData = [
  { label: "Mon", value: 2500 },
  { label: "Tue", value: 3500 },
  { label: "Wed", value: 4200 },
  { label: "Thu", value: 3800 },
  { label: "Fri", value: 5200 },
  { label: "Sat", value: 4800 },
  { label: "Sun", value: 4500 },
]

const monthlyData = [
  { label: "Jan", value: 3500 },
  { label: "Feb", value: 4500 },
  { label: "Mar", value: 5200 },
  { label: "Apr", value: 4800 },
  { label: "May", value: 4200 },
  { label: "Jun", value: 3800 },
  { label: "Jul", value: 4500 },
  { label: "Aug", value: 5200 },
  { label: "Sep", value: 4800 },
  { label: "Oct", value: 4200 },
  { label: "Nov", value: 3800 },
  { label: "Dec", value: 4500 },
]

export function RevenueChart() {
  const [period, setPeriod] = React.useState("weekly")

  const data = period === "weekly" ? weeklyData : monthlyData

  return (
    <Card className="flex-1">
      <CardHeader className="flex flex-row items-center justify-between" >
        <CardTitle className="text-xl font-semibold">Revenue</CardTitle>
        <div>
          <PeriodToggle
            value={period}
            onValueChange={setPeriod}
            options={[
              { value: "weekly", label: "Weekly" },
              { value: "monthly", label: "Monthly" },
            ]}
          />
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            value: {
              label: "Earnings",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[340px] w-full"
        >
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="earningsGradient" x1="0" y1="0" x2="0" y2="1">
                
                <stop offset="100%" stopColor="#1A0D83" stopOpacity={1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
            <XAxis
              dataKey="label"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="rgb(52, 211, 153)"
              strokeWidth={2}
              fill="url(#earningsGradient)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
