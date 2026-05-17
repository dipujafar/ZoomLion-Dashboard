"use client"
import { AddFileIcon } from '@/icon'
import { Button } from 'antd'
import React from 'react'
import { FleetZoneManagementStat } from './FleetZoneManagementStat'
import Link from 'next/link'


export default function FleetZoneManagementContainer() {
    const [open, setOpen] = React.useState(false);
    return (
        <div className='space-y-5'>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-2xl font-bold'>Zone Management</h3>
                    <p className='text-[#6B7280]'>Monitor and manage delivery zones and rider assignments</p>
                </div>
                <Link href={"/fleet-zone-management/add-zone"}>
                    <Button icon={<AddFileIcon className='mt-1' />} size='large' type='default' className='!bg-[#efe7fb] !text-[#1A0D83] !border-[#1A0D83]' >Add Zone</Button>
                </Link>
            </div>
            <div>
                <FleetZoneManagementStat />
            </div>
            {/* <div>
                <FleetZoneManagementTable />
            </div> */}
            {/* <AddZod open={open} setOpen={setOpen} typeUser='zone' /> */}
        </div>
    )
}
