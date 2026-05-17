"use client";;
import { Input, message, Popconfirm, PopconfirmProps, TableProps } from "antd";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import { Eye } from "lucide-react";
import UserDetails from "@/components/(adminDashboard)/modals/user/UserDetails";
import { CgUnblock } from "react-icons/cg";
import { cn } from "@/lib/utils";

type TDataType = {
    key?: number;
    serial: number;
    name: string;
    email: string;
    date: string;
    phoneNumber: string;
    status: "Active" | "Inactive";
};

const data: TDataType[] = Array.from({ length: 14 }).map((data, inx) => ({
    key: inx,
    serial: inx + 1,
    name: "Cleopas Owusu",
    email: "cleopasowusu@gmail.com",
    phoneNumber: "+233-30-8749352",
    date: "11 Dec, 2025",
    status: (inx === 3 || inx === 6) ? "Inactive" : "Active",
}));
const confirmBlock: PopconfirmProps["onConfirm"] = (e) => {
    console.log(e);
    message.success("Blocked the user");
};

const UsersTable = () => {
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
            title: "Registration Date",
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
                        text === "Active" ? "text-[#24983F] bg-[#EAF6EC]" : "text-[#8D881B] bg-[#F6F4EA]"
                    )}
                >
                    {text}
                </p>
            )
        },

        {
            title: "Action",
            dataIndex: "action",
            render: (_, record) => (
                <div className="flex items-center gap-x-1">
                    <Eye
                        size={22}
                        color="#78C0A8"
                        onClick={() => setOpen(true)}
                    />

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
    ];

    return (
        <div className="bg-section-bg rounded-3xl">
            <div className="max-w-[400px] ml-auto mb-2 pt-2">
                <Input.Search placeholder="Search here..." size="large" />
            </div>
            <DataTable columns={columns} data={data} pageSize={12}></DataTable>
            <UserDetails open={open} setOpen={setOpen} typeUser="User"></UserDetails>
        </div>
    );
};

export default UsersTable;
