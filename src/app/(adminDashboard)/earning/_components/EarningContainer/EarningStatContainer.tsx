import StatCard from "@/components/(adminDashboard)/cards/statCard";
import React from "react";

const statData = [
  {
    id: 1,
    title: "Total Revenue",
    amount: "GH₵ 7444",
    timeLine: "Last 30 days",
  },
  {
    id: 2,
    title: "Today Revenue",
    amount: "GH₵ 56500",
    growth: "10%",
    timeLine: " average rate",
  },
];

export default function EarningStatContainer() {
  return (
    <div className="grid  md:grid-cols-2 grid-cols-1 xl:gap-5 gap-3">
      {statData?.map((item) => (
        <div key={item.id}>
          <StatCard {...item} />
        </div>
      ))}
    </div>
  );
}
