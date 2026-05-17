import React from 'react'
import RiderStatContainer from './RiderStatContainer'
import RiderVerificationTable from './RiderVerificationTable'

export default function RiderVerificationContainer() {
    return (
        <div className='space-y-10'>
            <RiderStatContainer />
            <RiderVerificationTable />
        </div>
    )
}
