"use client"

import * as React from "react"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const monthData = [
  { name: "Organic", value: 42, color: "#10B981" },
  { name: "Metal", value: 18, color: "#92400E", labelValue: "32%" },
  { name: "Plastic", value: 15, color: "#A855F7", labelValue: "20%" },
  { name: "General", value: 15, color: "#F59E0B", labelValue: "20%" },
  { name: "Paper", value: 10, color: "#3B82F6", labelValue: "20%" },
]

const weekData = [
  { name: "Organic", value: 35, color: "#10B981" },
  { name: "Metal", value: 25, color: "#92400E", labelValue: "35%" },
  { name: "Plastic", value: 10, color: "#A855F7", labelValue: "17%" },
  { name: "General", value: 12, color: "#F59E0B", labelValue: "22%" },
  { name: "Paper", value: 16, color: "#3B82F6", labelValue: "18%" },
]

const renderCustomLabel = ({ cx, cy, midAngle, outerRadius, name, value, color, index }: any) => {
  const RADIAN = Math.PI / 180
  const radius = outerRadius * 1.25
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  // Mapping labels to match the image text exactly (even if percentages don't sum to 100)
  const displayValues: Record<string, string> = {
    Organic: "42%",
    Metal: "32%",
    Plastic: "20%",
    General: "20%",
    Paper: "20%",
  }

  return (
    <text
      x={x}
      y={y}
      fill={color}
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      className="text-sm font-medium"
    >
      {`${name}: ${displayValues[name]}`}
    </text>
  )
}

export function WasteTypeDistribution() {
  const [period, setPeriod] = React.useState<"weekly" | "monthly">("weekly")

  return (
    <Card className="w-full  border  flex-1">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-2xl font-semibold text-gray-900">Waste Type Distribution</CardTitle>
        <div className="flex items-center space-x-6">
          <button
            onClick={() => setPeriod("weekly")}
            className="flex items-center space-x-2 cursor-pointer focus:outline-none"
          >
            <div
              className={cn(
                "w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors",
                period === "weekly" ? "border-blue-500" : "border-gray-300",
              )}
            >
              {period === "weekly" && <div className="w-2 h-2 rounded-full bg-blue-500" />}
            </div>
            <span className={cn("text-sm font-medium", period === "weekly" ? "text-blue-500" : "text-gray-400")}>
              Weekly
            </span>
          </button>
          <button
            onClick={() => setPeriod("monthly")}
            className="flex items-center space-x-2 cursor-pointer focus:outline-none"
          >
            <div
              className={cn(
                "w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors",
                period === "monthly" ? "border-blue-500" : "border-gray-300",
              )}
            >
              {period === "monthly" && <div className="w-2 h-2 rounded-full bg-blue-500" />}
            </div>
            <span className={cn("text-sm font-medium", period === "monthly" ? "text-blue-500" : "text-gray-400")}>
              Monthly
            </span>
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[320px] w-full mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={period === "weekly" ? weekData : monthData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomLabel}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
                stroke="#fff"
                strokeWidth={2}
              >
                {period === "weekly" ? weekData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                )) : monthData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-4 mt-8">
          {(period === "weekly" ? weekData : monthData)?.map((item) => (
            <div key={item.name} className="flex items-center space-x-2">
              <span className="text-base font-medium text-gray-600">{item.name}</span>
              <div className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: item.color }} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
