import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Template from "../components/AuthPages/Template";
import Title from "../components/AuthPages/Title/Title";
import Input from "../components/AuthPages/Input/Input";
import SubmitButton from "../components/AuthPages/SubmitButton/SubmitButton";
import { mobile } from "../responsive";

const TermsContainer = styled.div`
    width: 100%;
    margin-bottom: 10px;
    flex: 1;
    display: flex;
    justify-content: start;
    ${mobile({
        marginBottom: "20px",
    })}
`;

const TermsCheck = styled.input``;

const Terms = styled.div`
    font-size: 12px;
    ${mobile({
        fontSize: "16px",
    })}
`;

const SignUp = () => {
    return (
        <div>
            <Navbar />
            <Template>
                <Title>فراموشی رمز عبور</Title>
                <Input placeholder={"نام و نام خانوادگی"} name={"name"} />
                <Input placeholder={"ایمیل"} name={"email"} />
                <Input
                    placeholder={"رمز عبور"}
                    name={"password"}
                    type={"password"}
                />
                <TermsContainer>
                    <TermsCheck type="checkbox" />
                    <Terms>تمامی شرایط و قوانین را می‌پذیرم.</Terms>
                </TermsContainer>
                <SubmitButton>ثبت نام</SubmitButton>
            </Template>
            <Footer />
        </div>
    );
};

export default SignUp;
