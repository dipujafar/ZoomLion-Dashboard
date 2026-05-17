"use client"

import React, { useState } from "react"
import { Card } from "@/components/ui/card"
import { Select } from "antd"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

type ZoneData = { zone: string; revenue: number; pickups: number }

const initialData: ZoneData[] = [
  { zone: "Central Zone", revenue: 45000, pickups: 892 },
  { zone: "North Zone", revenue: 36300, pickups: 765 },
  { zone: "South Zone", revenue: 31700, pickups: 698 },
  { zone: "West Zone", revenue: 29000, pickups: 623 },
  { zone: "East Zone", revenue: 26100, pickups: 547 },
]

const currency = (v: number) => new Intl.NumberFormat("en-US").format(v)

export const ZoneComparisonChart: React.FC = () => {
  const [range, setRange] = useState<string>("Weekly")
  const [data] = useState<ZoneData[]>(initialData)

  return (
    <Card>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="xl:text-xl text-lg font-medium text-muted-foreground">Zone Performance Overview</h3>
            <div className="text-xs text-muted-foreground">Revenue and pickup comparison across all zones</div>
          </div>

          <div>
            <Select
              value={range}
              onChange={(v) => setRange(String(v))}
              options={[{ value: "Weekly", label: "Weekly" }, { value: "Monthly", label: "Monthly" }]}
              size="small"
              style={{ width: 120 }}
            />
          </div>
        </div>

        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={data} margin={{ top: 20, right: 40, left: 16, bottom: 20 }} barCategoryGap={28}>
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.6} />
            <XAxis dataKey="zone" tick={{ fontSize: 12 }} />
            <YAxis yAxisId="left" tickFormatter={(v) => `${(Number(v) / 1000).toFixed(0)}k`} width={72} />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip formatter={(value: number, name: string) => (name === "revenue" ? [`GHC ${currency(value)}`, "Revenue (GHC)"] : [currency(value), "Pickups"]) } />
            <Legend verticalAlign="bottom" align="center" wrapperStyle={{ paddingTop: 8 }} />

            <Bar dataKey="pickups" name="Pickups" yAxisId="right" fill="#2F80ED" barSize={60} radius={[6, 6, 0, 0]} />
            <Bar dataKey="revenue" name="Revenue (GHC)" yAxisId="left" fill="#10B981" barSize={60} radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

export default ZoneComparisonChart
