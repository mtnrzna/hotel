import React from "react";
import Navbar from "../components/AdminPanelNavbar/Navbar";
import Sidebar from "../components/AdminPanelSidebar/Sidebar"
import CreateRoomInputs from "../components/AdminpanelInputs/CreateRoomInputs";
const AdminPanelCreateRooms = () => {
    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <CreateRoomInputs/>
        </div>
    );
};

export default AdminPanelCreateRooms;
