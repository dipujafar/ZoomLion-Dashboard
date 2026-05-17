import StatCard from "@/components/(adminDashboard)/cards/statCard";
import { Car, CircleCheckBig, Clock4, DollarSign, Users } from "lucide-react";
import React from "react";

const statData = [
    {
        id: 1,
        title: "Ongoing Rides",
        amount: "42",
        increase: true,
        growth: "12",
        icon: <Car />,
        iconColor: "text-[#155DFC]",
        iconBg: "bg-[#DBEAFE]",
        onlyTimeLine: "From yesterday",
        textColor: "text-[#00A63E]",
    },
    {
        id: 2,
        title: "Available Riders",
        amount: "18",
        increase: true,
        growth: "4",
        icon: <Users />,
        iconColor: "text-[#00A63E]",
        iconBg: "bg-[#F0FDF4]",
        onlyTimeLine: "Live",
        textColor: "text-[#155DFC]",
    },
    {
        id: 3,
        title: "Completed Today",
        amount: "127",
        increase: true,
        growth: "8.3%",
        icon: <CircleCheckBig />,
        iconColor: "text-[#9810FA]",
        iconBg: "bg-[#FAF5FF]",
        onlyTimeLine: "From yesterday",
        textColor: "text-[#00A63E]",
    },
    {
        id: 4,
        title: "Avg Wait Time",
        amount: "8.5 min",
        increase: false,
        growth: "1.2%",
        icon: <Clock4 />,
        iconColor: "text-[#F54900]",
        iconBg: "bg-[#FFEDD4]",
        onlyTimeLine: "Min Improvement",
        textColor: "text-[#00A63E]",
    },
];

export default function RealTimeMonitorStats() {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 xl:gap-5 gap-3">
            {statData?.map((item) => (
                <div key={item.id}>
                    <StatCard {...item} />
                </div>
            ))}
        </div>
    );
}
