import React from "react";
import styled from "styled-components";

const Container = styled.div`
    max-width: 1400px;
`;

const PageContainer = ({ children }) => {
    return <Container>{children}</Container>;
};

export default PageContainer;
