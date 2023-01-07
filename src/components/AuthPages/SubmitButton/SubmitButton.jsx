import React from "react";
import styled from "styled-components";
import TemplateButton from "../../UI/TemplateButton";

const CustomButton = styled(TemplateButton)`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 13px;
    &:active {
        background-color: #2f81edde;
    }
`;

const SubmitButton = ({ children }) => {
    return <CustomButton>{children}</CustomButton>;
};

export default SubmitButton;
