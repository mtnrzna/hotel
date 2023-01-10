import React from "react";
import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Button = styled.button`
    background-color: transparent;
    border: transparent;
    font-weight: 600;
    display: flex;
    align-items: center;
`;

const LikesButton = ({ likeNumber, onClick, liked }) => {
    return (
        <Button onClick={onClick}>
            {liked ? (
                <FavoriteIcon
                    style={{
                        color: "red",
                        fontSize: "20px",
                        marginLeft: "5px",
                    }}
                />
            ) : (
                <FavoriteBorderIcon
                    style={{
                        fontSize: "20px",
                        marginLeft: "5px",
                    }}
                />
            )}

            {likeNumber}
        </Button>
    );
};

export default LikesButton;
