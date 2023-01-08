import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SignInSection from "../components/AuthPages/SignInSection/SignInSection";

const SignIn = () => {
    return (
        <div>
            <Navbar />
            <SignInSection />
            <Footer />
        </div>
    );
};

export default SignIn;
