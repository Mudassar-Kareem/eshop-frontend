import React from "react";
import AdminHeader from "../../components/admin/Layout/AdminHeader"
import AdminSideBar from "../../components/admin/Layout/AdminSideBar"
import AllEvents from "../../components/admin/AllEvents"


const AdminDashboardEvents = () => {
  return (
    <div>
      <AdminHeader />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="w-[80px] 800px:w-[330px]">
            <AdminSideBar active={6} />
          </div>
          <AllEvents />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardEvents;
