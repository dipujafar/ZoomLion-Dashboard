"use client";
import { Select } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import { Card } from "@/components/ui/card";

const data = [
  { name: "Jan", user: 100, diff: 320 - 100 },
  { name: "Feb", user: 310, diff: 320 - 310 },
  { name: "Mar", user: 150, diff: 320 - 150 },
  { name: "Apr", user: 150, diff: 320 - 150 },
  { name: "May", user: 180, diff: 320 - 180 },
  { name: "Jun", user: 200, diff: 320 - 200 },
  { name: "Jul", user: 320, diff: 320 - 320 },
  { name: "Aug", user: 230, diff: 320 - 230 },
  { name: "Sep", user: 250, diff: 320 - 250 },
  { name: "Oct", user: 180, diff: 320 - 180 },
  { name: "Nov", user: 300, diff: 320 - 300 },
  { name: "Dec", user: 150, diff: 320 - 150 },
];

const UserOverViewChart = () => {
  const [selectedYear, setSelectedYear] = useState<string>(
    new Date().getFullYear().toString()
  );
  const [selectedUserType, setSelectedUserType] = useState<string>(
    "User"
  );

  const yearsOption = Array(5)
    .fill(0)
    .map((_, index) => new Date().getFullYear() - index);

  const handleChange = (value: string) => {
    setSelectedYear(value);
  };
  const handleChangeUserType = (value: string) => {
    setSelectedUserType(value);
  };

  const customTooltip = (props: any) => {
    const { active, payload } = props;
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#fff] p-3 rounded-lg shadow-md">
          <p className="label">{`${payload[0].value} users`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="p-6">
      <div className="flex flex-wrap xl:flex-nowrap justify-between items-center mb-10 gap-2">
        <h1 className="text-2xl text-black/70">Users Overview</h1>

        <div className="flex gap-x-2 items-center ">

          <Select
            value={selectedUserType}
            style={{ width: 120 }}
            onChange={handleChangeUserType}
            options={[
              { value: "User", label: "User" },
              { value: "Vendors", label: "Vendors" },
            ]}
          />
          <Select
            value={selectedYear}
            style={{ width: 120 }}
            onChange={handleChange}
            options={yearsOption.map((year) => ({
              value: year.toString(),
              label: year.toString(),
            }))}
          />
        </div>
      </div>

      {/* <div className=" flex gap-x-3 justify-center items-center">
        <div className="flex gap-x-1">
          <p className="bg-[#8243EE] p-2 rounded-full w-fit"></p>
          <p className="text-[11px]">User</p>
        </div>
        <div className="flex gap-x-1">
          <p className="bg-[#D8C5FA] p-2 rounded-full w-fit"></p>
          <p className="text-[11px]">Vendors</p>
        </div>
      </div> */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={500}
          height={320}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={customTooltip} />
          {/* <Legend /> */}

          <Bar dataKey="user" stackId="a" fill="#1A0D83" barSize={50} />
          <Bar dataKey="diff" stackId="a" fill="#afa9dd" barSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default UserOverViewChart;
