import React from "react";
import styled from "styled-components";

const ContainerDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f6f6f6;
    overflow: hidden;
`;

const Container = ({ children, style }) => {
    return <ContainerDiv style={style}>{children}</ContainerDiv>;
};

export default Container;
