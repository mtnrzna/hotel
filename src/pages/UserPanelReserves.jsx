import React from "react";
import Navbar from "../components/AdminPanelNavbar/Navbar";
import Sidebar from "../components/UserPanelSidebar/Sidebar"
import DataGridUserpanelReserves  from "../components/DataGrid/DataGridUserpanelReserves"

const UserPanelReserves = () => {
    return (
        <div>
            <Navbar userPanel={true} />
            <Sidebar />
            <DataGridUserpanelReserves/>
        </div>
    );
};

export default UserPanelReserves;
