import { ZoneCard } from "@/components/(adminDashboard)/cards/ZoneCard"


export const ZONES_DATA = [
  { id: "uptown-zone-1", name: "Uptown Zone", totalRiders: 24, activeNow: 18 },
  { id: "midtown-1", name: "Midtown", totalRiders: 24, activeNow: 18 },
  { id: "downtown-1", name: "Downtown", totalRiders: 24, activeNow: 18 },
  { id: "madina", name: "Madina", totalRiders: 24, activeNow: 18 },
  { id: "eastside", name: "Eastside", totalRiders: 24, activeNow: 18 },
  { id: "westside", name: "Westside", totalRiders: 24, activeNow: 18 },
  { id: "northgate", name: "Northgate", totalRiders: 24, activeNow: 18 },
  { id: "southpark", name: "Southpark", totalRiders: 24, activeNow: 18 },
  { id: "downtown-2", name: "Downtown", totalRiders: 24, activeNow: 18 },
  { id: "downtown-3", name: "Downtown", totalRiders: 24, activeNow: 18 },
  { id: "midtown-2", name: "Midtown", totalRiders: 24, activeNow: 18 },
  { id: "uptown-zone-2", name: "Uptown Zone", totalRiders: 24, activeNow: 18 },
];

export function FleetZoneManagementStat() {
    return (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {ZONES_DATA.map((zone) => (
                <ZoneCard key={zone.id} name={zone.name} totalRiders={zone.totalRiders} activeNow={zone.activeNow} />
            ))}
        </div>
    )
}
