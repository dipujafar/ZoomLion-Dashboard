"use client";;
import { Input, Select, TableProps } from "antd";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import { cn } from "@/lib/utils";
import { Eye, Trash2 } from "lucide-react";
import UserDetails from "@/components/(adminDashboard)/modals/user/UserDetails";

type TDataType = {
    key?: number;
    serial: number;
    riderName: string;
    riderEmail: string;
    location: string;
    ZIPCode: string;
    ZoneAssignment: string;
    riderCompleted: string;
    status: string;
};

const data: TDataType[] = Array.from({ length: 14 }).map((data, inx) => ({
    key: inx,
    serial: inx + 1,
    riderName: "Cleopas Owusu",
    riderEmail: "cleopasowusu@gmail.com",
    location: "Accra",
    ZIPCode: "3535",
    ZoneAssignment: "",
    riderCompleted: "23",
    status: (inx === 3 || inx === 6) ? "Busy" : inx % 2 === 0 ? "Offline" : "Online",
}));

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};


export default function FleetZoneManagementTable() {
    const [open, setOpen] = useState(false);

    const columns: TableProps<TDataType>["columns"] = [
        {
            title: "Serial",
            dataIndex: "serial",
            render: (text) => <p>#{text}</p>,
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
            title: "Location",
            dataIndex: "location",
        },
        {
            title: "ZIP Code",
            dataIndex: "ZIPCode",
        },

        {
            title: "Zone Assignment",
            dataIndex: "",
            render: (text) => <Select
                defaultValue="Uptown Zone"
                style={{ width: 170 }}
                onChange={handleChange}
                options={[
                    { value: 'Uptown Zone', label: 'Uptown Zone' },
                    { value: 'Midtown', label: 'Midtown' },
                    { value: 'Downtown', label: 'Downtown' },
                ]}
            />,
        },

        {
            title: "Rider Completed",
            dataIndex: "riderCompleted",
            align: "center",
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (text) => (
                <p
                    className={cn(text === "Online" && "text-[#15803D]", text === "Offline" && "text-[#B91C1C]", text === "Busy" && "text-[#EAB308]")}
                >
                    <span className={cn("size-3  mr-2 rounded-full inline-block", text === "Online" && "bg-[#15803D]", text === "Offline" && "bg-[#B91C1C]", text === "Busy" && "bg-[#EAB308]")}></span>
                    {text}
                </p>
            )
        },

        {
            title: "Action",
            dataIndex: "action",
            align: "center",
            render: (text) => <div className="flex gap-x-1 justify-center">
                <Eye  size={20} onClick={() => setOpen(true)} />
                <Trash2 size={20} />
            </div>,
        },
    ];

    return (
        <div className='bg-section-bg rounded-3xl border border-[#d7d4ef]/50'>
            <div className="flex items-center justify-between  mb-4 mt-2 pt-2 mx-5">
                <div className="space-y-1">
                    <h3 className="md:text-3xl text-2xl font-medium">Rider List</h3>
                    <p className="text-[#727272]">Assign Riders to zones for ba;anced coverage</p>
                </div>
                <div>
                    <Input.Search placeholder="Search here..." size="large" className="lg:!w-[400px]" />
                </div>
            </div>
            <DataTable columns={columns} data={data} pageSize={12}></DataTable>
            <UserDetails open={open} setOpen={setOpen} typeUser="User" />
        </div>
    )
}
