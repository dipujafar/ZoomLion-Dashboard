import { Tabs, TabsProps } from 'antd'
import React from 'react'
import RiderIncentives from './_components/RiderIncentives';
import CustomerLoyalty from './_components/CustomerLoyalty';



const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Rider Incentives',
        children: <RiderIncentives />,
    },
    {
        key: '2',
        label: 'Customer Loyalty',
        children: <CustomerLoyalty />,
    }
];

export default function IncentivesLoyaltyPage() {
    return (
        <div className='space-y-3'>
            <div>
                <h2 className='text-[#111827] text-2xl font-bold'>Incentives & Loyalty Management</h2>
                <p className='text-[#6A7282]'>Manage rewards for riders and customers</p>
            </div>
            <Tabs defaultActiveKey="1" items={items} />
        </div>
    )
}
