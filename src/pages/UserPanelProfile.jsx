import React from "react";
import Navbar from "../components/AdminPanelNavbar/Navbar";
import Sidebar from "../components/UserPanelSidebar/Sidebar"
import InputsUserPanel from "../components/InputsUserPanel/Inputs"
const UserPanelProfile = () => {
    return (
        <div>
            <Navbar userPanel={true} />
            <Sidebar />
            <InputsUserPanel/>
        </div>
    );
};

export default UserPanelProfile;
