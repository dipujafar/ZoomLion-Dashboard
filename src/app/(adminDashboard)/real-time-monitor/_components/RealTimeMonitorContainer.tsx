import React from 'react'
import RealTimeMonitorStats from './RealTimeMonitorStats'
import { RecentActivity } from './RecentActivity'
import { RiderLiveLocation } from './RiderLiveLocation'
import { ActiveRiderList } from './ActiveRiderList'

export default function RealTimeMonitorContainer() {
    return (
        <div className='space-y-5'>
            <RealTimeMonitorStats />
            <div className='flex flex-col lg:flex-row gap-5'>
                <div className='flex-1'>
                    <RiderLiveLocation />
                </div>
                <div className='flex-1'>
                    <ActiveRiderList />
                </div>
            </div>
            <RecentActivity />
        </div>
    )
}
