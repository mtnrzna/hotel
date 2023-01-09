import React from "react";
import Template from "../Template";
import Title from "../Title/Title";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";

import { mobile } from "../../../responsive";


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
