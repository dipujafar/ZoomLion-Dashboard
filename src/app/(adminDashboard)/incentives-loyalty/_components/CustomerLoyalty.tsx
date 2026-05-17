"use client";
import { Input } from 'antd'
import CustomerLoyaltyTable from './CustomerLoyaltyTable';

export default function CustomerLoyalty() {
    return (
        <div className="bg-section-bg rounded-3xl border border-[#d7d4ef]/50">
            <div className="flex items-center justify-between  mb-4 mt-2 pt-2 mx-5">
                <div className="space-y-1">
                    <h3 className="md:text-3xl text-2xl font-medium">Top Performers Leaderboard</h3>
                    <p className="text-[#727272]">Customer ranked by performance points</p>
                </div>
                <div>
                    <Input.Search placeholder="Search here..." size="large" className="lg:!w-[400px]" />
                </div>
            </div>
            <CustomerLoyaltyTable />
        </div>
    )
}
