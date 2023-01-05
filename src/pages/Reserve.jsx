import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import ReserveSection from "../components/ReservePage/ReserveSection";

const Reserve = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    return (
        <div>
            <Navbar />
            <ReserveSection />
            <Footer />
        </div>
    );
};

export default Reserve;
