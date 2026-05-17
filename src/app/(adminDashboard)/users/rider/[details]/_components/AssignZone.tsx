'use client'

import { AlertCircle, MapPin, Dot } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'

export function AssignZone() {
  return (
    <Card >
      <CardHeader>
        <CardTitle>Assigned Zone</CardTitle>
        <CardDescription>This rider is restricted to operate in one zone only</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {/* Active Zone Box */}
        <div className="rounded-lg border-2 border-blue-400 bg-blue-50 p-6">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Dot className="size-5 fill-blue-500 text-blue-500" />
                <span className="text-sm font-medium text-[#B38900]">Active Zone</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-5 text-gray-900" />
                <h3 className="text-2xl font-bold text-gray-900">Madina</h3>
              </div>
              <p className="text-sm text-gray-600">Rides are only accepted within this zone</p>
            </div>
            <div className="text-right">
              <p className="text-4xl font-bold text-gray-900">89</p>
              <p className="text-sm text-gray-600">Jobs this month</p>
            </div>
          </div>
        </div>

        {/* Info Alert */}
        <Alert className="border-blue-200 bg-blue-50">
          <AlertCircle className="size-4 text-blue-600" />
          <AlertDescription className="text-blue-900 mt-1">
            Per the new policy, each rider is assigned to exactly <span className="font-semibold">one zone</span>. The admin can reassign the zone at any time. The rider will not receive job requests outside their assigned zone.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  )
}
