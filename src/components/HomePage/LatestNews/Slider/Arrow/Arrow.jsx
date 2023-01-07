import React from "react";
import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Container = styled.button`
    width: 50px;
    height: 50px;
    padding: 10px;
    border: 1px solid #7b808c;
    border-radius: 8px;
    color: #7b808c;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Arrow = ({ onClick, type }) => {
    return (
        <Container onClick={onClick}>
            {type === "left" && <ArrowBackIosNewIcon />}
            {type === "right" && <ArrowForwardIosIcon />}
        </Container>
    );
};
export default Arrow;
