import ZonePerformanceTrends from './ZonePerformanceTrends'
import PickupSuccessRateChart from '../../_components/PickupSuccessRateChart'
import TopPerformingRiders from '../../_components/TopPerformingRiders'
import KpiGrid from '@/app/(adminDashboard)/(operations)/zone-performance/[zoneName]/_components/KpiGrid'
import { useRouter } from 'next/navigation'
import { ArrowLeft, DollarSign, Package, Star, Users } from 'lucide-react';
import ZoneName from './ZoneName';

export default function ZoneDetailsContainer() {
    const router = useRouter();
    return (
        <div className='space-y-6'>
            <div className="grid gap-6 bg-[#FFFFFF] p-4 rounded-lg">
                <div onClick={() => router.back()} className='flex items-center gap-x-2 cursor-pointer group'>
                    <ArrowLeft size={20} className="cursor-pointer text-[#4A5565] group-hover:scale-125 duration-500" />  <h5 className='text-xl text-[#4A5565] group-hover:text-black duration-500'>Back to all zones</h5>
                </div>
                <ZoneName />

                <KpiGrid
                  items={[
                    { label: "Total Revenue", value: "GHC₵ 42,500", icon: <DollarSign color='#00A63E' size={16} />, className:'bg-[#DCFCE7]' },
                    { label: "Total Pickups", value: "892", icon: <Package color='#155DFC' size={16} />, className:'bg-[#DBEAFE]' },
                    { label: "Avg Rating", value: "4.8 ★", icon: <Star color='#D08700' size={16} />, className:'bg-[#FFFAEB]' },
                    { label: "Active Riders", value: "12", icon: <Users color='#9810FA' size={16} />, className:'bg-[#F3E8FF]' },
                  ]}
                />

                <ZonePerformanceTrends />
                <PickupSuccessRateChart />
            </div>
            <div className='bg-[#FFFFFF] p-4 rounded-lg'>
                <TopPerformingRiders />
            </div>
        </div>
    )
}
