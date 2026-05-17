"use client";;
import { Input, message, Popconfirm, PopconfirmProps, TableProps } from "antd";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import { ArrowDownWideNarrow, ArrowRight } from "lucide-react";
import UserDetails from "@/components/(adminDashboard)/modals/user/UserDetails";
import { CgUnblock } from "react-icons/cg";
import { cn } from "@/lib/utils";
import Link from "next/link";

type TDataType = {
    key?: number;
    serial: number;
    name: string;
    email: string;
    date: string;
    jobsCompleted: string;
    acceptanceRate: "92%";
    avgDelay: string;
    complaints: string;
    riskLevel: string;
};

const data: TDataType[] = Array.from({ length: 14 }).map((data, inx) => ({
    key: inx,
    serial: inx + 1,
    name: "Akua Frimpong",
    email: "akuafrimpong@gmail.com",
    jobsCompleted: "550",
    date: "11 Dec, 2025",
    acceptanceRate: "92%",
    avgDelay: "2 mins",
    complaints: "0",
    riskLevel: (inx == 3 || inx == 6) ? "High" : inx % 2 === 0 ? "Low" : "Medium",
}));
const confirmBlock: PopconfirmProps["onConfirm"] = (e) => {
    console.log(e);
    message.success("Blocked the user");
};


const statusColors = (status: string) => {
    switch (status) {
        case "Low":
            return "text-[#008236] bg-[#DCFCE7]";
        case "Medium":
            return "text-[#A65F00] bg-[#FEF9C2]";
        case "High":
            return "text-[#C10007] bg-[#FFE2E2]";
    }
}

const RiderTable = () => {
    const [open, setOpen] = useState(false);

    const columns: TableProps<TDataType>["columns"] = [
        {
            title: "Serial",
            dataIndex: "serial",
            render: (text) => <p>#{text}</p>,
        },
        {
            title: "Name",
            dataIndex: "name",
            render: (text) => <p className="flex items-center gap-x-1"><div className="size-2 rounded-full bg-green-400"></div>{text}</p>,
        },
        {
            title: "Email",
            dataIndex: "email",
        },
        {
            title: "Jobs Completed",
            dataIndex: "jobsCompleted",
        },
        {
            title: "Acceptance Rate",
            dataIndex: "acceptanceRate",
        },
        {
            title: "Average Delay",
            dataIndex: "avgDelay",
        },
        {
            title: "Complaints",
            dataIndex: "complaints",
        },
        {
            title: "Join Date",
            dataIndex: "date",
            align: "center",
        },
        {
            title: "Risk Level",
            dataIndex: "riskLevel",
            render: (text) => (
                <p
                    className={cn(
                        "capitalize px-4 py-0.5 rounded-md w-fit", statusColors(text)
                    )}
                >
                    {text}
                </p>
            ),
            filterIcon: <ArrowDownWideNarrow color="#fff" size={20} />,
            filters: [
                { text: 'Low', value: 'Low' },
                { text: 'Medium', value: 'Medium' },
                { text: 'High', value: 'High' },
            ],
            onFilter: (value, record) => record.riskLevel.indexOf(value as string) === 0,
        },

        {
            title: "Action",
            dataIndex: "action",
            render: (_, record) => (
                <div className="flex items-center gap-x-1">
                    {/* <Eye
                        size={22}
                        color="#78C0A8"
                        onClick={() => setOpen(true)}
                    /> */}
                    <Popconfirm
                        title="Block the user"
                        description="Are you sure to block this user?"
                        onConfirm={confirmBlock}
                        okText="Yes"
                        cancelText="No"
                    >
                        <CgUnblock size={22} color="#CD0335" />
                    </Popconfirm>
                </div>
            ),
        },
        {
            title: "",
            dataIndex: "action",
            render: (_, record) => (
                <Link href={'/users/rider/details'}>
                <p className="flex gap-x-1 items-center text-[#78C0A8] cursor-pointer hover:scale-105 duration-500 text-sm">View Details <ArrowRight color="#78C0A8" size={16} /></p>
                </Link>
            ),
        },
    ];

    return (
        <div className="bg-section-bg rounded-3xl">
            <div className="max-w-[400px] ml-auto mb-2 pt-2">
                <Input.Search placeholder="Search here..." size="large" />
            </div>
            <DataTable columns={columns} data={data} pageSize={12}></DataTable>
            <UserDetails open={open} setOpen={setOpen} typeUser="Rider"></UserDetails>
        </div>
    );
};

export default RiderTable;
