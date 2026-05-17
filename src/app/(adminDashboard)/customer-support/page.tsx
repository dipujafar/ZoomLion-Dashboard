import React from 'react'
import CustomerSupportContainer from './_components/CustomerSupportContainer'

export default function CustomerSupportPage() {
    return (
        <div className='space-y-3'>
            <div>
                <h4 className='text-2xl font-bold text-[#111827]'>Customer Support</h4>
                <p className='text-[#6A7282]'>Manage and resolve customer support </p>
            </div>
            <CustomerSupportContainer />
        </div>
    )
}
