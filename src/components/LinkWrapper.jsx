import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkCustomized = styled(Link)`
    color: inherit;
    text-decoration: none;
`;
const LinkWrapper = ({ children, to, style = {} }) => {
    return (
        <LinkCustomized to={to} style={style}>
            {children}
        </LinkCustomized>
    );
};

export default LinkWrapper;
