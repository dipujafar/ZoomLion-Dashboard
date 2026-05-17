"use client"
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type Rider = {
  rank: number;
  name: string;
  initials?: string;
  zone: string;
  trips: number;
  earnings: number;
  rating: number;
};

const DEMO: Rider[] = [
  { rank: 1, name: "Kwame Mensah", initials: "KM", zone: "Central Zone", trips: 87, earnings: 12450, rating: 4.9 },
  { rank: 2, name: "Ama Serwaa", initials: "AS", zone: "Central Zone", trips: 82, earnings: 11680, rating: 4.8 },
  { rank: 3, name: "Kofi Asante", initials: "KA", zone: "Central Zone", trips: 78, earnings: 11120, rating: 4.8 },
  { rank: 4, name: "Abena Osei", initials: "AO", zone: "Central Zone", trips: 74, earnings: 10540, rating: 4.7 },
  { rank: 5, name: "Yaw Boateng", initials: "YB", zone: "Central Zone", trips: 71, earnings: 10130, rating: 4.7 },
];

const currency = (v: number) => `GHC₵ ${v.toLocaleString()}`;

export default function TopPerformingRiders({ data = DEMO, className }: { data?: Rider[]; className?: string }) {
  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">Top Performing Riders</CardTitle>
            {/* <CardDescription>Top performers by trips and earnings</CardDescription> */}
          </div>

          {/* <div>
            <select className="rounded-md border bg-white px-3 py-2 text-sm text-muted-foreground">
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Quarterly</option>
            </select>
          </div> */}
        </div>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <tr>
              <TableHead>Rank</TableHead>
              <TableHead>Rider</TableHead>
              <TableHead>Zone</TableHead>
              <TableHead>Trips</TableHead>
              <TableHead>Earnings</TableHead>
              <TableHead>Rating</TableHead>
            </tr>
          </TableHeader>

          <TableBody>
            {data.map((r) => (
              <TableRow key={r.rank}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full  
                        text-sm`}>
                      {`#${r.rank}`}
                    </div>
                  </div>
                </TableCell>

                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="bg-[#DCFCE7]">
                      <AvatarFallback className="bg-[#DCFCE7] text-[#008236] text-base">{r.initials ?? r.name.split(" ").map(s=>s[0]).slice(0,2).join("")}</AvatarFallback>
                    </Avatar>

                    <div>
                      <div className="font-medium">{r.name}</div>
                      <div className="text-xs text-muted-foreground">{r.rank === 1 ? "Top performer" : ""}</div>
                    </div>
                  </div>
                </TableCell>

                <TableCell className="text-sm text-muted-foreground">{r.zone}</TableCell>

                <TableCell className="font-medium">{r.trips}</TableCell>

                <TableCell className="font-medium">{currency(r.earnings)}</TableCell>

                <TableCell>
                  <div className="flex items-center gap-1">
                    <div className="text-blue-400 text-xl">★</div>
                    <div className="text-sm font-medium">{r.rating.toFixed(1)}</div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
