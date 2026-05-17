import riderImage from "@/assets/image/rider_picture.png"
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type TProps = {
    title: string;
    amount: string;
    subtitle?: string;
    textColor?: string
};

export default function RiderStatCard({
    title,
    amount,
    subtitle,
    textColor
}: TProps) {
    return (
        <div className="flex flex-col xl:gap-y-2 gap-y-1  justify-center p-6  flex-1 bg-section-bg rounded-xl border border-[#d7d4ef]/50">
            <h3 className=" xl:text-xl text-base text-[#212529] truncate">{title}</h3>
            <div className="flex items-center justify-between">
                <p className="xl:text-3xl lg:text-2xl text-xl font-medium ">{amount}</p>
                {/* <Image src={riderImage} alt="rider_image" className="" /> */}
            </div>
            <h6 className={cn("text-[#7F7F7F]", textColor)}>{subtitle}</h6>
        </div>
    );
}
