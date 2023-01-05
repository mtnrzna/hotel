import React from "react";
import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Button = styled.button`
    background-color: transparent;
    border: transparent;
    font-weight: 600;
    display: flex;
    align-items: center;
`;

const LikesButton = ({ likeNumber }) => {
    return (
        <Button>
            {likeNumber}
            <FavoriteBorderIcon
                style={{ fontSize: "20px", marginLeft: "5px" }}
            />
        </Button>
    );
};

export default LikesButton;
