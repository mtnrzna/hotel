import React from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
    width: 80%;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const HomeSectionWrapper = ({ children, style }) => {
    return <WrapperDiv style={style}>{children}</WrapperDiv>;
};

export default HomeSectionWrapper;
