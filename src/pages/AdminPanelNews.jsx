import React from "react";
import Navbar from "../components/AdminPanelNavbar/Navbar";
import Sidebar from "../components/AdminPanelSidebar/Sidebar"
import DataGridNews  from "../components/DataGrid/DataGridNews"

const AdminPanelNews = () => {
    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <DataGridNews/>
        </div>
    );
};

export default AdminPanelNews;
