import React from "react";
import styled from "styled-components";

const CustomInput = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 30px;
    border: 1px solid #cbcbcb;
    border-radius: 3px;
    box-sizing: border-box;
`;

const Input = ({ placeholder, name, type = "text" }) => {
    return <CustomInput placeholder={placeholder} name={name} type={type} />;
};

export default Input;
