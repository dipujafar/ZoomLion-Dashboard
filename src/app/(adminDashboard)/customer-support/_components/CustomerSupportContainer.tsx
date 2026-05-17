import React from 'react'
import CustomerSupportStat from './CustomerSupportStat'
import { TicketSidebar } from './TicketSidebar'
import { ChatInterface } from './ChatInterface'

export default function CustomerSupportContainer() {
    return (
        <div className='space-y-5'>
            <CustomerSupportStat />
            <div className=" flex w-full h-full bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
                <TicketSidebar />
                <ChatInterface />
            </div>
        </div>
    )
}
