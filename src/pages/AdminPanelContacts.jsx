import React from "react";
import Navbar from "../components/AdminPanelNavbar/Navbar";
import Sidebar from "../components/AdminPanelSidebar/Sidebar"
import DataGridContacts  from "../components/DataGrid/DataGridContacts"

const AdminPanelContacts = () => {
    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <DataGridContacts/>
        </div>
    );
};

export default AdminPanelContacts;
