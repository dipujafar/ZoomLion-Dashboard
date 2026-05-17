"use client"

import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Card } from "@/components/ui/card";

export type TrendPoint = {
  day: string;
  pickups: number;
  revenue: number; // in GHC
};

const demoData: TrendPoint[] = [
  { day: "Day 1", pickups: 7500, revenue: 5000 },
  { day: "Day 2", pickups: 7700, revenue: 5200 },
  { day: "Day 3", pickups: 8000, revenue: 6500 },
  { day: "Day 4", pickups: 7600, revenue: 6400 },
  { day: "Day 5", pickups: 7300, revenue: 6300 },
  { day: "Day 6", pickups: 7900, revenue: 5600 },
  { day: "Day 7", pickups: 7100, revenue: 5100 },
];

type Props = {
  data?: TrendPoint[];
  height?: number | string;
};

export default function ZonePerformanceTrends({ data = demoData, height = 320 }: Props) {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between mb-4 gap-4">
        <div>
          <h3 className="text-lg font-semibold">Performance Trends</h3>
          <p className="text-sm text-muted-foreground">Track zone performance over time</p>
        </div>

        {/* <div>
          <select className="rounded-md border bg-white px-3 py-2 text-sm text-muted-foreground">
            <option>Weekly</option>
            <option>Daily</option>
            <option>Monthly</option>
          </select>
        </div> */}
      </div>

      <div style={{ width: "100%", height }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 8, right: 40, left: 8, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" tick={{ fontSize: 12 }} />

            {/* pickups (left axis) */}
            <YAxis
              yAxisId="left"
              tickFormatter={(v) => String(v)}
              stroke="#374151"
              width={72}
            />

            {/* revenue (right axis) */}
            <YAxis
              yAxisId="right"
              orientation="right"
              tickFormatter={(v) => `${(Number(v) / 1000).toFixed(0)}k`}
              stroke="#10B981"
            />

            <Tooltip
              contentStyle={{ borderRadius: 8, border: "none", boxShadow: "0 6px 18px rgba(15,23,42,0.08)" }}
              formatter={(value: number, name: string) => {
                if (name === "revenue") return [`GHC ${new Intl.NumberFormat("en-US").format(value)}`, "Revenue (GHC)"];
                return [new Intl.NumberFormat("en-US").format(value), "Pickups"];
              }}
            />

            <Legend verticalAlign="bottom" align="center" iconType="circle" />

            <Line
              yAxisId="left"
              type="monotone"
              dataKey="pickups"
              name="Pickups"
              stroke="#374151"
              strokeWidth={2}
              dot={{ r: 3, strokeWidth: 0 }}
            />

            <Line
              yAxisId="right"
              type="monotone"
              dataKey="revenue"
              name="Revenue (GHC)"
              stroke="#10B981"
              strokeWidth={2}
              dot={{ r: 3, strokeWidth: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
