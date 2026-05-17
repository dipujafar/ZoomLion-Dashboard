'use client';
import { ArrowLeft, SquarePlus } from "lucide-react";
import SpecialRoleUserTable from "./SpecialRoleUserTable";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AddSpecialModal from "@/components/(adminDashboard)/modals/manage-admin-access/AddSpecialModal";

export default function ManageAdminAccessContainer() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-medium flex items-center gap-1"> <ArrowLeft size={20} onClick={() => router.back()} className="cursor-pointer" /> Manage Admin Access</h2>
        <Button type="default" onClick={() => setOpen(true)} icon={<SquarePlus size={20} />}>Add Support Admin</Button>
      </div>
      <SpecialRoleUserTable />
      <AddSpecialModal open={open} setOpen={setOpen} />
    </div>
  )
}
