"use client";;
import { message, Popconfirm, PopconfirmProps, TableProps } from "antd";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import { Eye, Trash2 } from "lucide-react";
import UserDetails from "@/components/(adminDashboard)/modals/user/UserDetails";
import { CgUnblock } from "react-icons/cg";

type TDataType = {
    key?: number;
    serial: number;
    name: string;
    email: string;
    date: string;
    type: string;
};

const data: TDataType[] = Array.from({ length: 14 }).map((data, inx) => ({
    key: inx,
    serial: inx + 1,
    name: "Cleopas Owusu",
    email: "cleopasowusu@gmail.com",
    date: "11 Dec, 2025",
    type: inx % 2 === 0 ? 'Support team' : "Finance Team",
}));
const confirmBlock: PopconfirmProps["onConfirm"] = (e) => {
    console.log(e);
    message.success("Blocked the user");
};

const SpecialRoleUserTable = () => {
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
            title: "Join Date",
            dataIndex: "date",
            align: "center",
        },
        {
            title: "Account Type",
            dataIndex: "type",
        },

        {
            title: "Action",
            dataIndex: "action",
            render: (_, record) => (
                <div className="flex justify-center items-center bg-[#FFDDDD] p-2 rounded-full w-fit">
                   <Trash2 size={16} className="text-red-600 cursor-pointer" />
                </div>
            ),
        },
    ];

    return (
        <div className="bg-section-bg rounded-3xl">
            <DataTable columns={columns} data={data} pageSize={12}></DataTable>
            <UserDetails open={open} setOpen={setOpen} typeUser="Rider"></UserDetails>
        </div>
    );
};

export default SpecialRoleUserTable;
