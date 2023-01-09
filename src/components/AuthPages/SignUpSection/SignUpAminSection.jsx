import React from "react";
import styled from "styled-components";
import Template from "../Template";
import Title from "../Title/Title";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import LinkWrapper from "../../LinkWrapper";
import { mobile } from "../../../responsive";

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

const AlreadySignedUpContainer = styled.div`
    width: 100%;
    margin-bottom: 10px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    ${mobile({
        marginTop: "20px",
    })}
`;

const AlreadySignedUp = styled.div`
    margin-right: 5px;
    font-weight: bold;
`;

const SignUpSection = () => {
    return (
        <Template>
            <Title>فراموشی رمز عبور</Title>
            <Input placeholder={"نام و نام خانوادگی"} name={"name"} />
            <Input placeholder={"ایمیل"} name={"email"} />
            <Input
                placeholder={"رمز عبور"}
                name={"password"}
                type={"password"}
            />
            <Input
                placeholder={"تکرار رمز عبور"}
                name={"confirmPassword"}
                type={"password"}
            />
            <TermsContainer>
                <TermsCheck type="checkbox" />
                <Terms>تمامی شرایط و قوانین را می‌پذیرم.</Terms>
            </TermsContainer>
            <SubmitButton>ثبت نام</SubmitButton>
            <AlreadySignedUpContainer>
                آیا قبلا ثبت نام کرده‌اید؟
                <AlreadySignedUp>
                    <LinkWrapper
                        to="/signinadmin"
                        style={{
                            textDecoration: "underline",
                        }}
                    >
                        ورود
                    </LinkWrapper>
                </AlreadySignedUp>
            </AlreadySignedUpContainer>
        </Template>
    );
};

export default SignUpSection;
