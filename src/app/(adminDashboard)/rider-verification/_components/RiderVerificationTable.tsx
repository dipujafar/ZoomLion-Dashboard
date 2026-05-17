"use client";;
import { Input, TableProps } from "antd";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import { Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import RiderApproveModal from "@/components/(adminDashboard)/modals/RiderApprove/RiderApproveModal";

type TDataType = {
    key?: number;
    serial: number;
    name: string;
    email: string;
    date: string;
    phoneNumber: string;
    status: "Approved" | "Pending" | "Rejected";
    type: string;
};

const data: TDataType[] = Array.from({ length: 14 }).map((data, inx) => ({
    key: inx,
    serial: inx + 1,
    name: "Cleopas Owusu",
    email: "cleopasowusu@gmail.com",
    phoneNumber: "+233-30-8749352",
    date: "11 Dec, 2025",
    status: inx == 5 ? "Rejected" : (inx === 3 || inx === 6) ? "Pending" : "Approved",
    type: "Ghana Card ID",
}));


const RiderVerificationTable = () => {
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
        },
        {
            title: "Email",
            dataIndex: "email",
        },
        {
            title: "Phone Number",
            dataIndex: "phoneNumber",
        },

        {
            title: "Documents Type",
            dataIndex: "type",
            align: "center",
        },
        {
            title: "Submission Date",
            dataIndex: "date",
            align: "center",
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (text) => (
                <p
                    className={cn(
                        "capitalize px-4 py-0.5 rounded-md w-fit",
                        text === "Approved" ? "text-[#24983F] bg-[#EAF6EC]" : "text-[#8D881B] bg-[#F6F4EA]",
                        text === "Rejected" && "text-[#77251C] bg-[#F6EAEA]"
                    )}
                >
                    {text}
                </p>
            )
        },

        {
            title: "Action",
            dataIndex: "action",
            align: "center",
            render: (_, record) => (
                <div className="flex items-center justify-center gap-x-1">
                    <Eye
                        size={22}
                        color="#78C0A8"
                        onClick={() => setOpen(true)}
                    />
                </div>
            ),
        },
    ];

    return (
        <div className="bg-section-bg rounded-3xl border border-[#d7d4ef]/50">
            <div className="flex items-center justify-between  mb-4 mt-2 pt-2 mx-5">
                <div className="space-y-1">
                    <h3 className="md:text-3xl text-2xl font-medium">Verification Requests</h3>
                    <p className="text-[#727272]">Review rider documents and approve or reject applications</p>
                </div>
                <div>
                    <Input.Search placeholder="Search here..." size="large" className="lg:!w-[400px]" />
                </div>
            </div>
            <DataTable columns={columns} data={data} pageSize={12}></DataTable>
            <RiderApproveModal open={open} setOpen={setOpen}></RiderApproveModal>
        </div>
    );
};

export default RiderVerificationTable;
