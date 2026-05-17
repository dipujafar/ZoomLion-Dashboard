'use client';
import { ArrowLeft } from "lucide-react";
import { ComplaintsTimeline } from "./ComplaintsTimeline";
import { Header } from "./Header";
import { MetricsCards } from "./MetricsCards";
import { RecentWorkHistory } from "./RecentWorkHistory";
import { ZonesWorked } from "./ZonesWorked";
import { useRouter } from "next/navigation";
import { AssignZone } from "./AssignZone";


export default function RiderDetailsContainer() {
    const router = useRouter();
    // Sample data
    const metrics = [
        { label: 'Acceptance Rate', value: '78%' },
        { label: 'Jobs Completed', value: '512' },
        { label: 'Avg Delay', value: '7 min' },
    ];

    const workHistory = [
        { date: 'Jan 14, 2026', location: 'Madina, Abeka', jobs: 12, ghs: 'GHS 156' },
        { date: 'Jan 13, 2026', location: 'Osu, Tema', jobs: 15, ghs: 'GHS 189' },
        { date: 'Jan 12, 2026', location: 'Madina, Achinota', jobs: 11, ghs: 'GHS 142' },
        { date: 'Jan 11, 2026', location: 'Lapaz, Abeka', jobs: 13, ghs: 'GHS 167' },
        { date: 'Jan 10, 2026', location: 'Madina, Osu', jobs: 14, ghs: 'GHS 178' },
    ];

    const complaints = [
        {
            date: 'Jan 14',
            time: '10:30 AM',
            description: 'Delayed pickup - 15 minutes late',
            status: 'resolved' as const,
        },
        {
            date: 'Jan 12',
            time: '2:15 PM',
            description: 'Unprofessional behavior reported',
            status: 'investigating' as const,
        },
        {
            date: 'Jan 10',
            time: '4:45 PM',
            description: 'Missed pickup - did not show up',
            status: 'resolved' as const,
        },
    ];

    const zones = [
        { name: 'Madina', jobs: 89 },
        { name: 'Abeka', jobs: 67 },
        { name: 'Osu', jobs: 45 },
        { name: 'Achimota', jobs: 33 },
    ];

    return (
        <div className="min-h-screen bg-gray-50 ">
            <div className="flex items-center mb-4 gap-x-1 cursor-pointer">
                <ArrowLeft size={20} onClick={() => router.back()} />
                <p className="text-2xl font-medium">Back to Riders List</p>
            </div>
            <div className="space-y-6">
                <Header name="Ama Sarpong" status="Active" riskLevel="MEDIUM RISK" />

                <MetricsCards metrics={metrics} />

                {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6"> */}
                {/* <div className="lg:col-span-1"> */}
                <RecentWorkHistory entries={workHistory} />
                {/* </div> */}
                {/* <div className="lg:col-span-2 h-full">
                        <ComplaintsTimeline complaints={complaints} />
                    </div> */}
                {/* </div> */}

                {/* <ZonesWorked zones={zones} /> */}
                <AssignZone />
            </div>
        </div>
    );
}
