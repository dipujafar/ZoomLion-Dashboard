'use client'

import { Users, Activity, UserX, MapPin } from 'lucide-react'

interface StatCard {
  label: string
  value: string | number
  icon: React.ReactNode
  iconColor: string
}

export function ZoneStat() {
  const stats: StatCard[] = [
    {
      label: 'Total Riders',
      value: 24,
      icon: <Users className="w-6 h-6" />,
      iconColor: 'text-blue-500',
    },
    {
      label: 'Active Now',
      value: 18,
      icon: <Activity className="w-6 h-6" />,
      iconColor: 'text-green-500',
    },
    {
      label: 'Offline',
      value: 1,
      icon: <UserX className="w-6 h-6" />,
      iconColor: 'text-red-500',
    },
    {
      label: 'Stations',
      value: 3,
      icon: <MapPin className="w-6 h-6" />,
      iconColor: 'text-orange-500',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className={`${stat.iconColor} mb-3`}>
            {stat.icon}
          </div>
          <p className="text-gray-600 text-sm font-medium mb-2">
            {stat.label}
          </p>
          <p className="text-3xl font-bold text-gray-900">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  )
}
