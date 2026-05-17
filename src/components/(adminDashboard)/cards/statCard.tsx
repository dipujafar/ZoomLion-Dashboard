import { DecreaseIcon, IncreaseIcon } from "@/icon";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUp } from "lucide-react";
import React from "react";

type TProps = {
  title: string;
  growth?: string;
  amount: string;
  increase?: boolean;
  timeLine?: string;
  icon?: React.ReactNode;
  iconColor?: string;
  iconBg?: string;
  onlyTimeLine?: string
  textColor?: string
};

export default function StatCard({
  title,
  growth,
  amount,
  increase,
  timeLine,
  icon,
  iconColor,
  iconBg,
  onlyTimeLine,
  textColor
}: TProps) {
  return (
    <div className="flex flex-col xl:gap-y-2 gap-y-1  justify-center p-6  flex-1 bg-section-bg rounded-xl border border-[#E5E7EB]/50">
      <div className={cn("flex justify-between gap-2 mb-2", !icon && "hidden")}>
        <div className={cn("p-3 rounded-md", iconBg, iconColor)}>{icon}</div>
        <div>
          <h1
            className={cn("flex items-center ", increase ? "text-[#00A63E]" : "text-[#E7000B]", increase === undefined && "text-[#1A0D83]")}
          >
            <div>
              {increase ? <IncreaseIcon /> : <DecreaseIcon/>}
            </div>
            <div className="ml-1">
              {increase ? "+" : "-"}
            </div>
            {growth}
          </h1>
        </div>
      </div>
      <h3 className=" text-[#727272] truncate">{title}</h3>
      <p className="xl:text-3xl lg:text-2xl text-xl font-medium ">{amount}</p>
      <div className={cn("flex gap-2", !timeLine && "hidden")}>
        <h1
          className={cn("flex", increase ? "text-[#165940]" : "text-[#5F1011]", increase === undefined && "text-[#1A0D83]")}
        >
          <div className={cn(!increase && "hidden")}>
            {increase ? <ArrowUp size={20} /> : <ArrowDown size={20} />}
          </div>
          {growth}
        </h1>
        <h6 className="text-[#7F7F7F]">{timeLine}</h6>
      </div>
      { onlyTimeLine && <h6 className={cn("text-[#7F7F7F]", textColor)}>{onlyTimeLine}</h6>}
    </div>
  );
}
