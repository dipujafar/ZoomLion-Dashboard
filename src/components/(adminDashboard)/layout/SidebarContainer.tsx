"use client";
import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import logoIcon from "@/assets/logo-icon.png";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { customNavLinks, salesNavLinks, supportNavLinks } from "@/utils/navLinks";


const SidebarContainer = ({ collapsed }: { collapsed: boolean }) => {
  const [role, setRole] = useState<string | null>(null);
  const [sidebarLinks, setSidebarLinks] = useState(customNavLinks);
  useEffect(() => {
    setRole(localStorage.getItem("role"));
  }, []);

  useEffect(() => {
    if (role === "support") {
      setSidebarLinks(supportNavLinks);
    } else if (role === "sales") {
      setSidebarLinks(salesNavLinks);
    } else {
      setSidebarLinks(customNavLinks);
    }
  }, [role]);

  let defaultKey = "dashboard";
  if (role === "support") {
    defaultKey = "customer-support";
  }
  else if (role === "sales") {
    defaultKey = "account-details";
  }

  const [current, setCurrent] = useState(defaultKey);
  const currentPath = usePathname();



  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    if (e.key === "logout") {
      localStorage.removeItem("activeNav");
      return;
    }
    localStorage.setItem("activeNav", e.key);
  };

  useEffect(() => {
    const activeKey = localStorage.getItem("activeNav");
    if (!activeKey) return;
    if (activeKey && currentPath !== "/dashboard") {
      setCurrent(activeKey as string);
    } else {
      setCurrent(defaultKey);
    }
  }, []);

  return (
    <Sider
      width={320}
      theme="light"
      collapsible
      collapsed={collapsed}
      trigger={null}
      style={{
        paddingInline: `${collapsed ? "5px" : "10px"}`,
        backgroundColor: "var(--color-secondary)",
        maxHeight: "100vh",
        overflow: "auto",
        borderBottom: "1px solid #e8e8e8",
      }}
    >
      <div className="demo-logo-vertical" />
      {/* logo  */}
      <div className=" flex flex-col justify-center items-center gap-y-5 my-5">
        {collapsed ? (
          <Link href={"/"}>
            <Image src={logoIcon} alt="logo_Image_icon" />
          </Link>
        ) : (
          <Link href={"/"}>
            <Image src={logo} alt="logo_Image"  className="w-36" />
          </Link>
        )}
      </div>
      <Menu
        onClick={onClick}
        defaultSelectedKeys={[defaultKey]}
        selectedKeys={[current]}
        mode="inline"
        className="sidebar-menu text-lg bg-main-color"
        items={sidebarLinks}
      />
    </Sider>
  );
};

export default SidebarContainer;
