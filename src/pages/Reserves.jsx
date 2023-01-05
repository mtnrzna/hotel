import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import ReservesSection from "../components/ReservesPage/ReservesSection";
import Footer from "../components/Footer";

const Reserves = () => {
    return (
        <div>
            <Navbar />
            <ReservesSection />
            <Footer />
        </div>
    );
};

export default Reserves;
