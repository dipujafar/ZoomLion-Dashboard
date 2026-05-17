import StatusCard from '@/components/(adminDashboard)/cards/StatusCard'
import { CheckCircle, Clock, MessageSquare } from 'lucide-react'
import React from 'react'

export default function CustomerSupportStat() {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-5 gap-3">
            <StatusCard
                icon={MessageSquare}
                count={24}
                label="Active"
                variant="warning"
            />
            <StatusCard
                icon={CheckCircle}
                count={18}
                label="Resolved Today"
                variant="success"
            />
            <StatusCard
                icon={Clock}
                count={12}
                label="Pending reply"
                variant="pending"
            />
        </div>
    )
}
