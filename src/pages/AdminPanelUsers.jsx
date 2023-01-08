import React from "react";
import Navbar from "../components/AdminPanelNavbar/Navbar";
import Sidebar from "../components/AdminPanelSidebar/Sidebar"
import DataGridUsers  from "../components/DataGrid/DataGridUsers"

const AdminPanelUsers = () => {
    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <DataGridUsers/>
        </div>
    );
};

export default AdminPanelUsers;
