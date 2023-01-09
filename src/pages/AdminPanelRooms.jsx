import React from "react";
import Navbar from "../components/AdminPanelNavbar/Navbar";
import Sidebar from "../components/AdminPanelSidebar/Sidebar"
import DataGridRooms  from "../components/DataGrid/DataGridRooms"
const AdminPanelRooms = () => {
    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <DataGridRooms/>
        </div>
    );
};

export default AdminPanelRooms;
