import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
`;

const CustomHTag = styled.h3``;

const SubmitButton = ({ children }) => {
    return (
        <Container>
            <CustomHTag>{children}</CustomHTag>
        </Container>
    );
};

export default SubmitButton;
