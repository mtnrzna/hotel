import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Intro from "../components/HomePage/Intro/Intro";
import Reserve from "../components/HomePage/Reserve/Reserve";
import LatestNews from "../components/HomePage/LatestNews/LatestNews";
import Facilities from "../components/HomePage/Facilities/Facilities";
import ContactUs from "../components/HomePage/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Intro />
            <Reserve />
            <LatestNews />
            <Facilities />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;
