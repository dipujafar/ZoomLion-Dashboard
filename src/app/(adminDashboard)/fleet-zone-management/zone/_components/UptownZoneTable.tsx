"use client";;
import DataTable from "@/utils/DataTable";
import { Input, TableProps } from "antd";
import { Trash2 } from "lucide-react";

type TDataType = {
    key?: number;
    serial: number;
    ZIPCode: string;
    areaName: string;
    riders: string;
};

const data: TDataType[] = Array.from({ length: 6 }).map((data, inx) => ({
    key: inx,
    serial: inx + 1,
    ZIPCode: "3535",
    areaName: "Ahafo Region",
    riders: "23",
}));


const UptownZoneTable = () => {

    const columns: TableProps<TDataType>["columns"] = [
        {
            title: "Serial",
            dataIndex: "serial",
            render: (text) => <p>#{text}</p>,
        },
        {
            title: "ZIP Code",
            dataIndex: "ZIPCode",
        },
        {
            title: "Area Name",
            dataIndex: "areaName",
        },
        {
            title: "Riders",
            dataIndex: "riders",
        },

        {
            title: "Action",
            dataIndex: "action",
            render: (text) => <Trash2 size={20} />,
        },
    ];

    return (
        <div className="bg-section-bg rounded-3xl border border-[#d7d4ef]/50 ">
            <div className="flex items-center justify-between  mb-4 mt-2 pt-2 mx-5">
                <h3 className="md:text-3xl text-2xl font-medium">ZIP Codes in Uptown Zone</h3>
                <div>
                    <Input.Search placeholder="Search here..." size="large" className="lg:!w-[400px]" />
                </div>
            </div>
            <DataTable columns={columns} data={data}></DataTable>
        </div>
    );
};

export default UptownZoneTable;
