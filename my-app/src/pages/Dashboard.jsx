import React from "react";
import { Outlet } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import LayoutDemo from "../Layout/LayoutDemo";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};

export default Dashboard;
