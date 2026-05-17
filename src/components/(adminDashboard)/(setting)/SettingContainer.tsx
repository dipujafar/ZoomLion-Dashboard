"use client";
import ChangePasswordModal from "@/components/(adminDashboard)/(setting)/changePassword/ChangePasswordModal";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const links = [
  {
    label: "Manage Admin Access",
    path: "manage-admin-access",
  },
  {
    label: "Personal Information",
    path: "personal-information",
  },
  {
    label: "Set Commission Rate ",
    path: "set-commission-rate",
  },
  {
    label: "Change Password",
    path: "changePassword",
  },
  {
    label: "About Us",
    path: "about-us",
  },
  {
    label: "Terms & Condition",
    path: "terms-condition",
  },
  {
    label: "Privacy Policy",
    path: "privacy-policy",
  }
];

const SettingContainer = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="grid grid-cols-1 gap-5">
      {links?.map((link, inx) => {
        if (link.path === "changePassword") {
          return (
            <div
              key={inx}
              onClick={() => setOpen(!open)}
              className="bg-[#fff]   p-5 rounded flex justify-between items-center cursor-pointer"
            >
              <h4 className="text-[#333] font-medium">{link?.label}</h4>
              <IoIosArrowForward size={16} color="#000" />
            </div>
          );
        } else {
          return (
            <Link key={link.path} href={`/${link.path}`}>
              <div className="bg-[#fff]  p-5 rounded flex justify-between items-center group">
                <h4 className="text-[#333] font-medium">{link?.label}</h4>
                <IoIosArrowForward size={16} color="#000" className="group-hover:scale-125 duration-500" />
              </div>
            </Link>
          );
        }
      })}
      <ChangePasswordModal open={open} setOpen={setOpen}></ChangePasswordModal>
    </div>
  );
};

export default SettingContainer;
