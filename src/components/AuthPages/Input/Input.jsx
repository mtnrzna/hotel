import React from "react";
import styled from "styled-components";
import { mobile } from "../../../responsive";

const CustomInput = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 30px;
    border: 1px solid #cbcbcb;
    border-radius: 3px;
    box-sizing: border-box;
    direction:rtl;
    ${mobile({
        width: "100%",
        padding: "16px 10px",
        marginBottom: "20px",
        fontSize: "16px",
        boxSizing: "border-box",
    })}
`;

const Input = ({ placeholder, name, type = "text" ,style}) => {
    return <CustomInput style={style} placeholder={placeholder} name={name} type={type} />;
};

export default Input;
