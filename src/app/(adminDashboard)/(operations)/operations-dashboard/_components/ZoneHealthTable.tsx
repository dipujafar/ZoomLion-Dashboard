"use client"

import * as React from "react"
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card"
import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const bgColorAndTextColor = (text: string) => {
    switch (text) {
        case "Healthy":
            return "bg-[#DCFCE7] text-[#016630] border-transparent"
        case "Watch":
            return "bg-[#FEF9C2] text-[#894B00] border-transparent"
        case "Action Needed":
            return "bg-[#FFE2E2] text-[#9F0712] border-transparent"
    }
}

const DATA = [
    { zone: "Abeka", requests: 45, completed: 38, riders: 6, wait: "8 min", completion: 84, status: "Watch", color: "bg-blue-400" },
    { zone: "Madina", requests: 67, completed: 65, riders: 12, wait: "5 min", completion: 97, status: "Healthy", color: "bg-emerald-400" },
    { zone: "Osu", requests: 34, completed: 32, riders: 7, wait: "6 min", completion: 94, status: "Healthy", color: "bg-emerald-400" },
    { zone: "Tema", requests: 28, completed: 21, riders: 3, wait: "15 min", completion: 75, status: "Action Needed", color: "bg-red-400" },
    { zone: "Achimota", requests: 41, completed: 39, riders: 8, wait: "7 min", completion: 95, status: "Healthy", color: "bg-emerald-400" },
    { zone: "Lapaz", requests: 52, completed: 46, riders: 9, wait: "9 min", completion: 88, status: "Watch", color: "bg-blue-400" },
]

export const ZoneHealthTable = ({ className }: { className?: string }) => {
    return (
        <Card className={className}>
            <CardHeader>
                <div>
                    <CardTitle className="text-lg">Zone Health</CardTitle>
                    {/* <CardDescription>Overview of zone performance and rider availability</CardDescription> */}
                </div>
            </CardHeader>

            <CardContent>
                <Table>
                    <TableHeader>
                        <tr>
                            <TableHead>Zone</TableHead>
                            <TableHead>Requests</TableHead>
                            <TableHead>Completed</TableHead>
                            <TableHead>Riders Available</TableHead>
                            <TableHead>Avg Wait Time</TableHead>
                            <TableHead>Completion %</TableHead>
                            <TableHead>Status</TableHead>
                        </tr>
                    </TableHeader>
                    <TableBody>
                        {DATA.map((r) => (
                            <TableRow key={r.zone}>
                                <TableCell className="flex items-center gap-2">
                                    <span className={`inline-block h-2.5 w-2.5 rounded-full ${r.color}`} />
                                    <div className="">{r.zone}</div>
                                </TableCell>
                                <TableCell>{r.requests}</TableCell>
                                <TableCell>{r.completed}</TableCell>
                                <TableCell>{r.riders}</TableCell>
                                <TableCell>{r.wait}</TableCell>
                                <TableCell>
                                    <div className="inline-flex items-center gap-2">
                                        <div className={`rounded-md  px-2 py-1 text-sm font-semibold ${bgColorAndTextColor(r.status)}`}>{r.completion}%</div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge
                                        className={`px-3 py-1 text-sm rounded-full ${bgColorAndTextColor(r.status)}`}
                                    >
                                        {r.status}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <div className="mt-6 rounded-lg border border-[#BEDBFF] bg-[#EFF6FF] p-4 text-sm text-muted-foreground">
                    <strong className="text-[#1C398E]">Guidance:</strong>
                    <span className="ml-2 text-[#1C398E]">Tema zone needs immediate attention - low rider availability causing high wait times. Consider onboarding 2-3 more riders in this area.</span>
                </div>
            </CardContent>
        </Card>
    )
}

export default ZoneHealthTable
