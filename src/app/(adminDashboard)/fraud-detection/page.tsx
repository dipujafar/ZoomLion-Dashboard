import React from 'react'
import FraudDetectionContainer from './_components/FraudDetectionContainer'

export default function FraudDetectionPage() {
  return (
    <div className='space-y-3'>
        <div>
            <h4 className='text-2xl font-bold text-[#111827]'>Fraud Detection</h4>
            <p className='text-[#6A7282]'>Review and manage suspicious activities</p>
        </div>
        <FraudDetectionContainer />
    </div>
  )
}
