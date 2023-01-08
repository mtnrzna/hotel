import React from "react";
import styled from "styled-components";
import PersonIcon from "@mui/icons-material/Person";

const Button = styled.button`
    background-color: transparent;
    border: transparent;
    font-weight: 600;
    display: flex;
    align-items: center;
`;

const CapacityButton = ({ capacityNumber }) => {
    return (
        <Button>
            <PersonIcon
                style={{ fontSize: "20px", marginLeft: "5px", color: "black" }}
            />
            {capacityNumber}
        </Button>
    );
};

export default CapacityButton;
