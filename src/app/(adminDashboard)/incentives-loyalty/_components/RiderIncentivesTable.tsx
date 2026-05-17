'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { RiderCard } from '@/components/(adminDashboard)/cards/RiderCard'

export default function RiderIncentivesTable() {
  const [selectedZone, setSelectedZone] = useState('all')

  const zones = [
    { id: 'all', label: 'All Zones' },
    { id: 'central', label: 'Central Zone' },
    { id: 'north', label: 'North Zone' },
    { id: 'south', label: 'South Zone' },
    { id: 'west', label: 'West Zone' },
    { id: 'east', label: 'East Zone' },
  ]

  const riders = [
    {
      name: 'John Smith',
      initials: 'JS',
      rideCount: 245,
      rating: 5.0,
      todayRides: 28,
      totalRides: 25,
      extraRidesCompleted: 3,
      status: 'bonus-eligible' as const,
    },
    {
      name: 'John Smith',
      initials: 'JS',
      rideCount: 245,
      rating: 5.0,
      todayRides: 27,
      totalRides: 25,
      extraRidesCompleted: 2,
      status: 'bonus-eligible' as const,
    },
    {
      name: 'John Smith',
      initials: 'JS',
      rideCount: 245,
      rating: 5.0,
      todayRides: 28,
      totalRides: 25,
      extraRidesCompleted: 3,
      status: 'bonus-eligible' as const,
    },
    {
      name: 'John Smith',
      initials: 'JS',
      rideCount: 245,
      rating: 5.0,
      todayRides: 26,
      totalRides: 25,
      extraRidesCompleted: 1,
      status: 'bonus-eligible' as const,
    },
    {
      name: 'John Smith',
      initials: 'JS',
      rideCount: 245,
      rating: 5.0,
      todayRides: 25,
      totalRides: 25,
      extraRidesCompleted: 0,
      status: 'daily-target-achieved' as const,
    },
    {
      name: 'John Smith',
      initials: 'JS',
      rideCount: 245,
      rating: 5.0,
      todayRides: 20,
      totalRides: 25,
      extraRidesCompleted: 0,
      status: 'in-progress' as const,
    },
    {
      name: 'John Smith',
      initials: 'JS',
      rideCount: 245,
      rating: 5.0,
      todayRides: 25,
      totalRides: 25,
      extraRidesCompleted: 0,
      status: 'daily-target-achieved' as const,
    },
    {
      name: 'John Smith',
      initials: 'JS',
      rideCount: 245,
      rating: 5.0,
      todayRides: 20,
      totalRides: 25,
      extraRidesCompleted: 0,
      status: 'in-progress' as const,
    },
  ]

  const handleAssignBonus = (name: string) => {
    console.log(`Bonus assigned for ${name}`)
  }

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div>
        {/* Zone Selection Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {zones.map((zone) => (
            <Button
              key={zone.id}
              onClick={() => setSelectedZone(zone.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedZone === zone.id
                  ? 'bg-blue-400 text-gray-900 hover:bg-blue-500'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {zone.label}
            </Button>
          ))}
        </div>

        {/* Rider Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {riders.map((rider, index) => (
            <RiderCard
              key={index}
              {...rider}
              onAssignBonus={() => handleAssignBonus(rider.name)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
