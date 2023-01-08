import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";

const WrapperDiv = styled.div`
    width: 80%;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${mobile({
        width: "100%",
    })}
`;

const HomeSectionWrapper = ({ children, style }) => {
    return <WrapperDiv style={style}>{children}</WrapperDiv>;
};

export default HomeSectionWrapper;
