import StatCard from "@/components/(adminDashboard)/cards/statCard";
import { CircleCheckBig, DollarSign, Truck, Users } from "lucide-react";
import React from "react";

const statData = [
  {
    id: 1,
    title: "Total Users",
    amount: "4,550",
    increase: true,
    growth: "4",
    icon: <Users />,
    iconColor: "text-[#00A63E]",
    iconBg: "bg-[#F0FDF4]",
  },
  {
    id: 2,
    title: "Total Rider",
    amount: "555",
    increase: true,
    growth: "4",
    icon: <Users />,
    iconColor: "text-[#00A63E]",
    iconBg: "bg-[#F0FDF4]",
  },
  {
    id: 3,
    title: "Total Revenue",
    amount: "GH₵ 77,020",
    increase: true,
    growth: "8.3%",
    icon: <DollarSign />,
    iconColor: "text-[#9810FA]",
    iconBg: "bg-[#FAF5FF]",
  },
  {
    id: 4,
    title: "Completion Rate",
    amount: "94.2%",
    increase: false,
    growth: "1.2%",
    icon: <CircleCheckBig />,
    iconColor: "text-[#009966]",
    iconBg: "bg-[#F0FDF4]",
  },
  {
    id: 5,
    title: "Today's Revenue",
    amount: "GH₵ 7,020",
    increase: true,
    growth: "8.3%",
    icon: <DollarSign />,
    iconColor: "text-[#9810FA]",
    iconBg: "bg-[#FAF5FF]",
  },
  {
    id: 6,
    title: "Today's Waste Collections",
    amount: "234 Kg",
    increase: true,
    growth: "12.5%",
    icon: <Truck />,
    iconColor: "text-[#155DFC]",
    iconBg: "bg-[#EFF6FF]",
  },
  {
    id: 7,
    title: "Active Riders",
    amount: "48",
    increase: true,
    growth: "4",
    icon: <Users />,
    iconColor: "text-[#00A63E]",
    iconBg: "bg-[#F0FDF4]",
  },
  {
    id: 8,
    title: "Complete Rides Today",
    amount: "48",
    increase: false,
    growth: "4",
    icon: <CircleCheckBig />,
    iconColor: "text-[#009966]",
    iconBg: "bg-[#F0FDF4]",
  },
];

export default function StatContainer() {
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
