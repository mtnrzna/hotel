import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Template from "../components/AuthPages/Template";
import Title from "../components/AuthPages/Title/Title";
import Input from "../components/AuthPages/Input/Input";
import SubmitButton from "../components/AuthPages/SubmitButton/SubmitButton";

const ForgotPass = () => {
    return (
        <div>
            <Navbar />
            <Template>
                <Title>فراموشی رمز عبور</Title>
                <Input placeholder={"ایمیل"} name={"email"} />
                <SubmitButton>ارسال</SubmitButton>
            </Template>
            <Footer />
        </div>
    );
};

export default ForgotPass;
