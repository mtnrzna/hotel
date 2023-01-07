import React from "react";
import styled from "styled-components";

const ContainerDiv = styled.div`
    height: 100vh;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HomeSectionContainer = ({ children, style }) => {
    return <ContainerDiv style={style}>{children}</ContainerDiv>;
};

export default HomeSectionContainer;
