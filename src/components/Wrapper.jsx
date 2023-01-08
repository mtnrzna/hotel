import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const WrapperDiv = styled.div`
    width: 80%;
    max-width: 1400px;
    padding: 40px 60px;
    margin: 60px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    box-shadow: 0px 5px 10px 0px #dddddd;
    box-sizing: border-box;
    overflow: hidden;
    ${mobile({
        width: "100%",
        padding: "0",
        margin: "0",
        boxShadow: "none",
    })}
`;

const Wrapper = ({ children, style }) => {
    return <WrapperDiv style={style}>{children}</WrapperDiv>;
};

export default Wrapper;
