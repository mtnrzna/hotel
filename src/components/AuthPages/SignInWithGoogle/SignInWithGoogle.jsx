import React from "react";
import styled from "styled-components";
import GoogleIcon from "@mui/icons-material/Google";
import { mobile } from "../../../responsive";

const CustomButton = styled.button`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    background-color: white;
    color: #151618;
    border: 2px solid #151618;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:active {
        background-color: #efefef;
    }
    ${mobile({
        width: "100%",
        height: "60px",
        fontSize: "16px",
    })}
`;

const GIcon = styled(GoogleIcon)`
    font-size: 14px;
    margin-left: 5px;
`;

const SignInWithGoogle = () => {
    return (
        <CustomButton>
            <GIcon />
            ورود با گوگل
        </CustomButton>
    );
};

export default SignInWithGoogle;
