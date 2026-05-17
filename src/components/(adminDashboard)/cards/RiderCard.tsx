'use client';
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star } from 'lucide-react'

interface RiderCardProps {
  name: string
  initials: string
  rideCount: number
  rating: number
  todayRides: number
  totalRides: number
  extraRidesCompleted: number
  status: 'bonus-eligible' | 'daily-target-achieved' | 'in-progress'
  onAssignBonus?: () => void
}

export function RiderCard({
  name,
  initials,
  rideCount,
  rating,
  todayRides,
  totalRides,
  extraRidesCompleted,
  status,
  onAssignBonus,
}: RiderCardProps) {
  const rideProgress = (todayRides / totalRides) * 100

  const statusConfig = {
    'bonus-eligible': {
      label: 'Bonus Eligible',
      badge: 'bg-blue-100 text-blue-800',
      progressColor: 'bg-blue-400',
      button: 'bg-blue-300 hover:bg-blue-500 text-blue-900',
    },
    'daily-target-achieved': {
      label: 'Daily Target Achieved',
      badge: 'bg-green-100 text-green-800',
      progressColor: 'bg-green-500',
      button: 'bg-blue-300 hover:bg-blue-500 text-blue-900',
    },
    'in-progress': {
      label: 'In Progress',
      badge: 'bg-blue-100 text-blue-800',
      progressColor: 'bg-green-500',
      button: 'bg-blue-300 hover:bg-blue-500 text-blue-900',
    },
  }

  const config = statusConfig[status]

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col gap-4 h-full">
      {/* Header with Avatar and Status */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12 bg-blue-400">
            <AvatarFallback className="text-black font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>• {rideCount} Rides</span>
              <div className="flex items-center gap-0.5">
                <Star className="h-3 w-3 fill-blue-400 text-blue-400" />
                <span>{rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </div>
        <Badge className={`text-xs font-medium ${config.badge}`}>
          {config.label}
        </Badge>
      </div>

      {/* Today's Rides Section */}
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 font-medium">Today's Rides</span>
          <span className="text-sm font-semibold text-gray-900">
            {todayRides} / {totalRides} rides
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all ${config.progressColor}`}
            style={{ width: `${rideProgress}%` }}
          />
        </div>

        {/* Extra Rides Info */}
        {extraRidesCompleted > 0 && (
          <div className="text-xs text-orange-600 font-medium">
            +{extraRidesCompleted} extra rides completed
          </div>
        )}
        {extraRidesCompleted < 0 && (
          <div className="text-xs text-orange-600 font-medium">
            {extraRidesCompleted} extra rides completed
          </div>
        )}
      </div>

      {/* Assign Bonus Button */}
      <Button
        onClick={onAssignBonus}
        className={`w-full text-sm font-semibold ${config.button}`}
      >
        Assign Bonus
      </Button>
    </div>
  )
}
