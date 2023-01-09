import React from "react";
import styled from "styled-components";
import Template from "../Template";
import Title from "../Title/Title";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import SignInWithGoogle from "../SignInWithGoogle/SignInWithGoogle";
import LinkWrapper from "../../LinkWrapper";
import { mobile } from "../../../responsive";

const ForgotPassContainer = styled.div`
    width: 100%;
    margin-bottom: 10px;
    flex: 1;
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 14px;
    ${mobile({
        marginBottom: "20px",
    })}
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

const SignInSection = () => {
    return (
        <Template>
            <Title>خوش آمدید</Title>
            <Input placeholder={"ایمیل"} name={"email"} />
            <Input
                placeholder={"رمز عبور"}
                name={"password"}
                type={"password"}
            />

            <SubmitButton>ورود</SubmitButton>
 
        </Template>
    );
};

export default SignInSection;
