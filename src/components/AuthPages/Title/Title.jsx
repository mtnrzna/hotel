import React from "react";
import styled from "styled-components";
import { mobile } from "../../../responsive";

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
`;

const CustomHTag = styled.h3`
    ${mobile({
        width: "100%",
        textAlign: "center",
        fontSize: "20px",
    })}
`;

const SubmitButton = ({ children }) => {
    return (
        <Container>
            <CustomHTag>{children}</CustomHTag>
        </Container>
    );
};

export default SubmitButton;
