import React from "react";
import styled from "styled-components";
import { mobile } from "../../../responsive";

const CustomInput = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #cbcbcb;
    border-radius: 3px;
    box-sizing: border-box;
    ${mobile({
        width: "100%",
        padding: "16px 10px",
        marginBottom: "20px",
        fontSize: "16px",
        boxSizing: "border-box",
    })}
`;

const Input = ({ placeholder, name, type = "text", onChange }) => {
    return (
        <CustomInput
            placeholder={placeholder}
            name={name}
            type={type}
            onChange={onChange}
        />
    );
};

export default Input;
