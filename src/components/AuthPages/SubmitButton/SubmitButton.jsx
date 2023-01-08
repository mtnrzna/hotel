import React from "react";
import styled from "styled-components";
import { mobile } from "../../../responsive";
import TemplateButton from "../../UI/TemplateButton";

const CustomButton = styled(TemplateButton)`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 13px;
    &:active {
        background-color: #2f81edde;
    }
    ${mobile({
        width: "100%",
        height: "60px",
        fontSize: "16px",
    })}
`;

const SubmitButton = ({ children }) => {
    return <CustomButton>{children}</CustomButton>;
};

export default SubmitButton;
