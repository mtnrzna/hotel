import React from "react";
import Navbar from "../components/AdminPanelNavbar/Navbar";
import Sidebar from "../components/AdminPanelSidebar/Sidebar"
import DataGridReserves  from "../components/DataGrid/DataGridReserves"

const AdminPanelReserves = () => {
    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <DataGridReserves/>
        </div>
    );
};

export default AdminPanelReserves;
