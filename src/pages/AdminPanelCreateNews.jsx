import React from "react";
import Navbar from "../components/AdminPanelNavbar/Navbar";
import Sidebar from "../components/AdminPanelSidebar/Sidebar"
import CreateNewsInputs from "../components/AdminpanelInputs/CreateNewsInputs";
const AdminPanelCreateNews = () => {
    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <CreateNewsInputs/>
        </div>
    );
};

export default AdminPanelCreateNews;
