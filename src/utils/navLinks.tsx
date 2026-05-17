import { RiDashboardHorizontalFill, RiEBike2Fill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import Link from "next/link";
import { Activity, MessageSquare, SquareActivity, Tags, UsersRound, Wallet } from "lucide-react";





export const supportNavLinks = [
  {
    key: "customer-support",
    icon: <MessageSquare size={18} />,
    label: <Link href={"/customer-support"}>Customer Support</Link>,
  },
  {
    key: "settings",
    icon: <IoSettingsOutline size={18} />,
    label: <Link href={"/settings"}>Settings</Link>,
  },
]

export const salesNavLinks = [
  {
    key: "account-details",
    icon: <UsersRound size={18} />,
    label: <div>Users Details</div>,
    children: [
      {
        key: "account-details",
        label: <Link href={"/users/users"}>Users</Link>,
      },
      {
        key: "Rider",
        label: <Link href={"/users/rider"}>Rider</Link>,
      },
    ]
  },
  {
    key: "earning",
    icon: <Wallet size={18} />,
    label: <Link href={"/earning"}>Earning</Link>,
  },
  {
    key: "settings",
    icon: <IoSettingsOutline size={18} />,
    label: <Link href={"/settings"}>Settings</Link>,
  },
]

export const customNavLinks = [
  {
    key: "dashboard",
    icon: <RiDashboardHorizontalFill size={18} />,
    label: <Link href={"/dashboard"}>Dashboard</Link>,
  },
  {
    key: "account-details",
    icon: <UsersRound size={18} />,
    label: <div>Users Details</div>,
    children: [
      {
        key: "account-details",
        label: <Link href={"/users/users"}>Users</Link>,
      },
      {
        key: "Rider",
        label: <Link href={"/users/rider"}>Rider</Link>,
      },
    ]
  },
  {
    key: "real-time-monitor",
    icon: <SquareActivity size={18} />,
    label: <Link href={"/real-time-monitor"}>Real-Time Monitor</Link>,
  },
  {
    key: "earning",
    icon: <Wallet size={18} />,
    label: <Link href={"/earning"}>Earning</Link>,
  },
  {
    key: "rider-verification",
    icon: <RiEBike2Fill size={18} />,
    label: <Link href={"/rider-verification"}>Rider Verification</Link>,
  },
  {
    key: "operations",
    icon: <Activity size={18} />,
    label: <label>Operations</label>,
    children: [
      {
        key: "operations-dashboard",
        label: <Link href={"/operations-dashboard"}>Operations Dashboard</Link>,
      },
      {
        key: "zone-performance",
        label: <Link href={"/zone-performance"}>Zone Performance</Link>,
      },
      {
        key: "fleet-zone-management",
        label: <Link href={"/fleet-zone-management"}>Zone Management</Link>,
      }
    ]
  },
  // {
  //   key: "fleet-zone-management",
  //   icon: <Users size={18} />,
  //   label: <Link href={"/fleet-zone-management"}>Fleet & Zone Management</Link>,
  // },
  {
    key: "incentives-loyalty",
    icon: <Tags size={18} />,
    label: <Link href={"/incentives-loyalty"}>Incentives & Loyalty</Link>,
  },
  // {
  //   key: "fraud-detection",
  //   icon: <Shield size={18} />,
  //   label: <Link href={"/fraud-detection"}>Fraud Detection</Link>,
  // },
  {
    key: "customer-support",
    icon: <MessageSquare size={18} />,
    label: <Link href={"/customer-support"}>Customer Support</Link>,
  },
  {
    key: "settings",
    icon: <IoSettingsOutline size={18} />,
    label: <Link href={"/settings"}>Settings</Link>,
  },
  // {
  //   key: "logout",
  //   icon: <RiLogoutCircleLine size={18} />,
  //   label: <Link href={"/login"}>Logout</Link>,
  // },
];




