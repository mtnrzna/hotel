import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SignUpSection from "../components/AuthPages/SignUpSection.jsx/SignUpSection";

const SignUp = () => {
    return (
        <div>
            <Navbar />
            <SignUpSection />
            <Footer />
        </div>
    );
};

export default SignUp;
