import React from 'react'
import FraudDetectionStat from './FraudDetectionStat'
import FraudActivityLogTable from './FraudActivityLogTable'
import { FraudAlertDetail } from './FraudAlertDetail'
import { FraudAlertSidebar } from './FraudAlertSidebar'

export default function FraudDetectionContainer() {
    return (
        <div className='space-y-5'>
            <FraudDetectionStat />
            <div className="flex  bg-[#F8F9FA] overflow-hidden">
                <FraudAlertSidebar />

                <div className="flex-1 overflow-y-auto p-8 bg-white">
                    <FraudAlertDetail />
                </div>
            </div>
            <FraudActivityLogTable />
        </div>
    )
}
