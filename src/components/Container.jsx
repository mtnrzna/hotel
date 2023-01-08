import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const ContainerDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f6f6f6;
    overflow: hidden;
    ${mobile({
        width: "100%",
        padding: "60px 0",
        backgroundColor: "white",
    })}
`;

const Container = ({ children, style }) => {
    return <ContainerDiv style={style}>{children}</ContainerDiv>;
};

export default Container;
