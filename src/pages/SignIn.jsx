import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Template from "../components/AuthPages/Template";
import Title from "../components/AuthPages/Title/Title";
import Input from "../components/AuthPages/Input/Input";
import SubmitButton from "../components/AuthPages/SubmitButton/SubmitButton";
import SignInWithGoogle from "../components/AuthPages/SignInWithGoogle/SignInWithGoogle";
import LinkWrapper from "../components/LinkWrapper";

const ForgotPassContainer = styled.div`
    width: 100%;
    margin-bottom: 10px;
    flex: 1;
    display: flex;
    justify-content: start;
    font-size: 14px;
`;

const ForgotPass = styled.div`
    margin-right: 5px;
    font-weight: bold;
`;

const OrSec = styled.div`
    width: 100%;
    margin: 10px 0;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Bar = styled.div`
    padding: 1px;
    width: 100%;
    background-color: #cbcbcb;
`;

const Or = styled.div`
    padding: 0 30px;
    color: #cbcbcb;
`;

const SignIn = () => {
    return (
        <div>
            <Navbar />
            <Template>
                <Title>خوش آمدید</Title>
                <Input placeholder={"ایمیل"} name={"email"} />
                <Input
                    placeholder={"رمز عبور"}
                    name={"password"}
                    type={"password"}
                />
                <ForgotPassContainer>
                    رمز عبور خود را فراموش کرده‌اید؟
                    <ForgotPass>
                        <LinkWrapper
                            to="/forgot-password"
                            style={{
                                textDecoration: "underline",
                            }}
                        >
                            فراموشی رمز عبور
                        </LinkWrapper>
                    </ForgotPass>
                </ForgotPassContainer>
                <SubmitButton>ورود</SubmitButton>
                <OrSec>
                    <Bar />
                    <Or>یا</Or>
                    <Bar />
                </OrSec>
                <SignInWithGoogle />
            </Template>
            <Footer />
        </div>
    );
};

export default SignIn;
