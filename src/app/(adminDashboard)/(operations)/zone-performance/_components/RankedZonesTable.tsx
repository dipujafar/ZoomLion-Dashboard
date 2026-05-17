"use client"

import * as React from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const DATA = [
  { rank: 1, zone: "Central Zone", revenue: 42500, pickups: 892, growth: 12.5, status: "High", color: "bg-blue-400" },
  { rank: 2, zone: "North Zone", revenue: 36300, pickups: 765, growth: 8.3, status: "High", color: "bg-slate-300" },
  { rank: 3, zone: "South Zone", revenue: 31700, pickups: 698, growth: 5.7, status: "Medium", color: "bg-orange-400" },
  { rank: 4, zone: "West Zone", revenue: 29000, pickups: 623, growth: 3.2, status: "Medium", color: "bg-violet-400" },
  { rank: 5, zone: "East Zone", revenue: 26100, pickups: 547, growth: -2.1, status: "Low", color: "bg-rose-400" },
]

const currency = (v: number) => `GH₵ ${v.toLocaleString()}`

export const RankedZonesTable = ({ className }: { className?: string }) => {
  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>Zone Performance Analytics</CardTitle>
            <CardDescription>Compare and analyze zone performance over time</CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <tr>
              <TableHead>Rank</TableHead>
              <TableHead>Zone Name</TableHead>
              <TableHead>Total Revenue</TableHead>
              <TableHead>Total Pickups</TableHead>
              <TableHead>Growth</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </tr>
          </TableHeader>

          <TableBody>
            {DATA.map((r) => (
              <TableRow key={r.rank}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted/60 font-semibold text-sm">
                      {r.rank}
                    </div>
                  </div>
                </TableCell>

                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className={`inline-flex h-9 w-9 items-center justify-center rounded-lg text-white ${r.color}`}> 
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="rgba(255,255,255,0.9)"/></svg>
                    </div>
                    <div>
                      <div className="font-medium">{r.zone}</div>
                      <div className="text-xs text-muted-foreground">{r.rank === 1 ? "Top performer" : ""}</div>
                    </div>
                  </div>
                </TableCell>

                <TableCell className="font-medium">{currency(r.revenue)}</TableCell>
                <TableCell>{r.pickups}</TableCell>

                <TableCell>
                  <div className={`inline-flex items-center text-sm ${r.growth >= 0 ? "text-emerald-600" : "text-rose-600"}`}>
                    {r.growth >= 0 ? (
                      <svg className="mr-2" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12l5-5 7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    ) : (
                      <svg className="mr-2" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M19 12l-5 5-7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    )}
                    <span>{Math.abs(r.growth)}%</span>
                  </div>
                </TableCell>

                <TableCell>
                  <Badge className={`px-3 py-1 text-sm rounded-full ${r.status === "High" ? "bg-[#DCFCE7] text-[#008236]" : r.status === "Medium" ? "bg-[#FEF9C2] text-[#A65F00]" : "bg-[#FFE2E2] text-[#C10007]"}`}>
                    {r.status}
                  </Badge>
                </TableCell>

                <TableCell>
                  <Link className="text-sm font-medium text-[#00A63E] hover:underline" href={`/zone-performance/${r.zone}`}>View Details →</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default RankedZonesTable
