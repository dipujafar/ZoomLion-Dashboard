"use client"
import { AddFileIcon } from "@/icon"
import { Button } from "antd"
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import UptownZoneTable from "./_components/UptownZoneTable";
import AddZIPCode from "@/components/(adminDashboard)/modals/user/AddZIPCode";
import { ZoneStat } from "./_components/ZoneStat";
import AssignedRider from "./_components/AssignedRider";
import { StationList } from "./_components/StationList";
import Link from "next/link";

export default function page() {
    const [open, setOpen] = React.useState(false);
    const router = useRouter();
    return (
        <div className="space-y-5">
            <div className="flex justify-between items-center">
                <div className="flex  gap-x-2">
                    <div className="mt-1">
                        <ArrowLeft className="h-5 w-5" onClick={() => router.back()} />
                    </div>
                    <div>
                        <h4 className="text-2xl text-[#111827] font-bold">Uptown Zone</h4>
                        <p className="text-[#6B7280]">Manage ZIP codes and coverage areas</p>
                    </div>
                </div>
                <div>
                    <Link href={"/fleet-zone-management/edit"}>
                        <Button icon={<AddFileIcon className='mt-1' />} size='large' type='default' className='!bg-[#efe7fb] !text-[#1A0D83] !border-[#1A0D83]' >Update Zone</Button>
                    </Link>
                </div>
            </div>
            <ZoneStat />
            {/* <UptownZoneTable /> */}
            <div className="grid xl:grid-cols-3 gap-5">
                <div className="xl:col-span-2">
                    <AssignedRider />
                </div>
                <StationList />
            </div>
            <AddZIPCode open={open} setOpen={setOpen} typeUser='zone' />
        </div>
    )
}
