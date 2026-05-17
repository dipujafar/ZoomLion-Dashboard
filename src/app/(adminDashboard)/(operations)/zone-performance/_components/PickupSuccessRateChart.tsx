"use client"

import React, { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { Card } from "@/components/ui/card";

const data = [
  { day: "Day 1", rate: 88 },
  { day: "Day 2", rate: 92 },
  { day: "Day 3", rate: 86 },
  { day: "Day 4", rate: 80 },
  { day: "Day 5", rate: 89 },
  { day: "Day 6", rate: 83 },
  { day: "Day 7", rate: 85 },
];

export default function PickupSuccessRateChart() {
  const [range] = useState("Weekly");

  return (
    <Card>
      <div className="flex items-center justify-between p-6 pt-4">
        <div>
          <h3 className="text-lg font-semibold">Pickup Success Rate</h3>
          <p className="text-sm text-muted-foreground">Percentage of successful pickups</p>
        </div>

        {/* <div className="text-sm text-muted-foreground">{range}</div> */}
      </div>

      <div className="h-[220px] p-4 pt-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 16, left: 8, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" tick={{ fontSize: 12 }} />
            <YAxis tickFormatter={(v) => `${v}%`} domain={[0, 100]} />
            <Tooltip formatter={(val: number) => `${val}%`} />
            <Bar dataKey="rate" fill="#10B981" radius={[6, 6, 0, 0]} barSize={58} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
