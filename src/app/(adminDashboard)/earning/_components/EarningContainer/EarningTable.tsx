"use client";;
import { Input, TableProps } from "antd";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import { cn } from "@/lib/utils";
import { Eye } from "lucide-react";
import EarningDetailsModal from "@/components/(adminDashboard)/modals/earning-details/EarningDetailsModal";

type TDataType = {
    key?: number;
    serial: number;
    passengerName: string;
    riderName: string;
    passengerEmail: string;
    riderEmail: string;
    date: string;
    amount: string;
    commission: string;
    riderEarning: string;
    status: string;
};

const data: TDataType[] = Array.from({ length: 14 }).map((data, inx) => ({
    key: inx,
    serial: inx + 1,
    passengerName: "Cleopas Owusu",
    riderName: "Cleopas Owusu",
    passengerEmail: "cleopasowusu@gmail.com",
    riderEmail: "cleopasowusu@gmail.com",
    date: "20-12-2025 9:30 AM",
    amount: "100",
    commission: "10%",
    riderEarning: " 90",
    status: "Completed",
}));


const EarningTable = () => {
    const [open, setOpen] = useState(false);

    const columns: TableProps<TDataType>["columns"] = [
        {
            title: "Serial",
            dataIndex: "serial",
            render: (text) => <p>#{text}</p>,
        },
        {
            title: "Passenger",
            dataIndex: "passengerName",
        },
        {
            title: "Passenger Email",
            dataIndex: "passengerEmail",
        },
        {
            title: "Rider",
            dataIndex: "riderName",
        },
        
        {
            title: "Rider Email",
            dataIndex: "riderEmail",
        },

        {
            title: "Amount",
            dataIndex: "amount",
            render: (text) => <p>GH₵ {text}</p>,
        },
        {
            title: "Commission",
            dataIndex: "commission",
            align: "center",
        },
        {
            title: "Rider Earnings",
            dataIndex: "riderEarning",
            render: (text) => <p className="text-center">GH₵ {text}</p>,
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (text) => (
                <p
                    className={cn(
                        "capitalize px-4 py-0.5 rounded-md w-fit text-[#1C7731] bg-[#1C7731]/10"
                    )}
                >
                    {text}
                </p>
            )
        },

        {
            title: "Date",
            dataIndex: "date",
            align: "center",
            render: (text) => <p className="w-[100px] text-center">{text}</p>,
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (_, record) => (
                <Eye onClick={() => setOpen(!open)} size={22} color="#78C0A8" />
            ),
        }
    ];

    return (
        <div className="bg-section-bg rounded-3xl border border-[#d7d4ef]/50 ">
            <div className="flex items-center justify-between  mb-4 mt-2 pt-2 mx-5">
                <div className="space-y-1">
                    <h3 className="md:text-3xl text-2xl font-medium">Payments & Commission</h3>
                    <p className="text-[#727272]">Track transactions, payouts, and commission settings</p>
                </div>
                <div>
                    <Input.Search placeholder="Search here..." size="large" className="lg:!w-[400px]" />
                </div>
            </div>
            <DataTable columns={columns} data={data} pageSize={12}></DataTable>
            <EarningDetailsModal open={open} setOpen={setOpen}></EarningDetailsModal>
        </div>
    );
};

export default EarningTable;
