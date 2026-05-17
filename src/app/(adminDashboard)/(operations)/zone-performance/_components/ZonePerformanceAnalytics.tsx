"use client"

import * as React from "react"
import RankedZonesTable from "./RankedZonesTable"
import ZoneComparisonChart from "../../../../../components/shared/ZoneComparisonChart"

export const ZonePerformanceAnalytics = () => {
  return (
    <div className="grid gap-6">
      <RankedZonesTable />
      <ZoneComparisonChart />
    </div>
  )
}

export default ZonePerformanceAnalytics
