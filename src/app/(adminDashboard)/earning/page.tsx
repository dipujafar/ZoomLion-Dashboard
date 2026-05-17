import React from 'react'
import EarningStatContainer from './_components/EarningContainer/EarningStatContainer'
import EarningTable from './_components/EarningContainer/EarningTable'

export default function EarningPage() {
    return (
        <div className='space-y-10'>
            <EarningStatContainer />
            <EarningTable />
        </div>
    )
}
