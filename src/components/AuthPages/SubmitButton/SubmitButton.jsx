import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #2f80ed;
    color: white;
    border: transparent;
    border-radius: 3px;
    &:active {
        background-color: #2f81edde;
    }
`;

const SubmitButton = ({ children }) => {
    return <CustomButton>{children}</CustomButton>;
};

export default SubmitButton;
