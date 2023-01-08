import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";

const ContainerDiv = styled.div`
    height: 100vh;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mobile({
        height: "100%",
        padding: "50px 0",
    })}
`;

const HomeSectionContainer = ({ children, style }) => {
    return <ContainerDiv style={style}>{children}</ContainerDiv>;
};

export default HomeSectionContainer;
