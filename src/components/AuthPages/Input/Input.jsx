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
    direction:rtl;
    ${mobile({
        width: "100%",
        padding: "16px 10px",
        marginBottom: "20px",
        fontSize: "16px",
        boxSizing: "border-box",
    })}
`;
const CustomTextarea = styled.textarea`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #cbcbcb;
    border-radius: 3px;
    box-sizing: border-box;
    direction:rtl;
    height: 200px;
    overflow-y: scroll;
    resize: none;
    ${mobile({
        width: "100%",
        padding: "16px 10px",
        marginBottom: "20px",
        fontSize: "16px",
        boxSizing: "border-box",
    })}
`;

const Input = ({ placeholder, name, type = "text", onChange, style,textarea}) => {
    if(textarea) return  <CustomTextarea style={style} placeholder={placeholder} name={name} type={type} />;
    return <CustomInput style={style} placeholder={placeholder} name={name} type={type} onChange={onChange} />;
};

export default Input;
