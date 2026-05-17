"use client";;
import DataTable from "@/utils/DataTable";
import { Input, TableProps } from "antd";

type TDataType = {
    key?: number;
    serial: number;
    type: string;
    user: string;
    status: string;
    action: string;
};

const data: TDataType[] = Array.from({ length: 6 }).map((data, inx) => ({
    key: inx,
    serial: inx + 1,
    type: "Duplicate Ride",
    user: "Cleopas Owusu",
    status: "Pending",
    action: "Pending review",
}));


const FraudActivityLogTable = () => {

    const columns: TableProps<TDataType>["columns"] = [
        {
            title: "Serial",
            dataIndex: "serial",
            render: (text) => <p>#{text}</p>,
        },
        {
            title: "type",
            dataIndex: "type",
        },
        {
            title: "User",
            dataIndex: "user",
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (text) => <p className="text-[#D00C0C]">{text}</p>
        },

        {
            title: "Action",
            dataIndex: "action",
        },
    ];

    return (
        <div className="bg-section-bg rounded-3xl border border-[#d7d4ef]/50 ">
            <div className="flex items-center justify-between  mb-4 mt-2 pt-2 mx-5">
                <div className="space-y-1">
                    <h3 className="md:text-3xl text-2xl font-medium">Recent Fraud Activity Log</h3>
                    <p className="text-[#727272]">Historical record of all flagged activities</p>
                </div>
                <div>
                    <Input.Search placeholder="Search here..." size="large" className="lg:!w-[400px]" />
                </div>
            </div>
            <DataTable columns={columns} data={data}></DataTable>
        </div>
    );
};

export default FraudActivityLogTable;
