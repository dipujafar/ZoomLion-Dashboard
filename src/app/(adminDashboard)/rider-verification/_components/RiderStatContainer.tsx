import RiderStatCard from "@/components/(adminDashboard)/cards/RiderStatCard";
import React from "react";

const statData = [
    {
        id: 1,
        title: "Total Approved",
        amount: "565",
        subtitle: "Ready to drive",
        textColor: "text-[#155DFC]",
    },
    {
        id: 2,
        title: "Approved Today",
        amount: "35",
        subtitle: "Ready to drive",
        textColor: "text-[#155DFC]",
    },
    {
        id: 3,
        title: "Pending Reviews",
        amount: "20",
        subtitle: "Awaiting Reviews",
        textColor: "text-[#00A63E]",
    },
    {
        id: 4,
        title: "Rejected",
        amount: "5",
        subtitle: "Need resubmission",
        textColor: "text-[#00A63E]",
    },
];

export default function RiderStatContainer() {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 xl:gap-5 gap-3">
            {statData?.map((item) => (
                <div key={item.id}>
                    <RiderStatCard {...item} />
                </div>
            ))}
        </div>
    );
}
