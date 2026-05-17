"use client"

import * as React from "react"
import PickupsPerHourCard from "./PickupsPerHourCard"
import AvgPickupTimeCard from "./AvgPickupTimeCard"
import CompletionRateCard from "./CompletionRateCard"
import ZoneHealthTable from "./ZoneHealthTable"


export const OperationsDashboard = () => {
  return (
    <div className="grid gap-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Operations Dashboard</h2>
          <p className="text-muted-foreground">Compare and analyze zone performance over time</p>
        </div>
        <div>
          <select className="rounded-md border px-3 py-2 text-sm">
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Daily</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        <PickupsPerHourCard />
        <AvgPickupTimeCard />
      </div>

      <div>
        <CompletionRateCard />
      </div>

      <div>
        <ZoneHealthTable />
      </div>
    </div>
  )
}

export default OperationsDashboard
