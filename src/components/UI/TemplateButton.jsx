import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2f80ed;
    color: white;
    border: 0px;
    border-radius: 3px;
    font-size: 17px;
`;

const TemplateButton = ({ children, className }) => {
    return <CustomButton className={className}>{children}</CustomButton>;
};

export default TemplateButton;
