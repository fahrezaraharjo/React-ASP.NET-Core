import React from "react";
import { AppBar, AppBarSection, AppBarSpacer } from "@progress/kendo-react-layout";
import { Link, useLocation } from "react-router-dom";
import { SvgIcon } from "@progress/kendo-react-common";
import {
  bellIcon,
  gridIcon,
  fileIcon,
  clipboardIcon,
  userIcon
} from "@progress/kendo-svg-icons";

const Navbar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", icon: gridIcon, path: "/dashboard" },
    { label: "My Task", icon: clipboardIcon, path: "/report" },
    { label: "Inspection Report", icon: fileIcon, path: "/inspection-report" },
  ];

  return (
    <AppBar positionMode="static" themeColor="light" className="bg-white">
      {/* Left: Logo */}
      <AppBarSection>
        <div className="flex items-center gap-2 px-4">
          <img src="/logo192.png" alt="logo" className="h-6 w-6" />
          <span className="text-lg font-semibold text-blue-500">PdM</span>
          <span className="text-sm text-gray-600">Online Reporting</span>
        </div>
      </AppBarSection>

      {/* Menu Items */}
      <AppBarSection>
        <div className="flex gap-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-2 px-3 py-2 rounded-md ${location.pathname === item.path
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
                }`}
            >
              <SvgIcon icon={item.icon} size="medium" />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </AppBarSection>

      <AppBarSpacer />

      {/* Right: Notification & User */}
      <AppBarSection>
        <div className="flex items-center gap-4 pr-4">
          <div className="relative">
            <SvgIcon icon={bellIcon} size="medium" className="text-blue-600" />
            <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 border border-white"></span>
          </div>
          <div className="flex items-center gap-2">
            <SvgIcon icon={userIcon} size="medium" />
            <span className="text-sm font-medium text-blue-600">Planner PHE</span>
          </div>
        </div>
      </AppBarSection>
    </AppBar>
  );
};

export default Navbar;
