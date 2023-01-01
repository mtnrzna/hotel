import React from "react";
import styled from "styled-components";
import { bigRoom } from "../.././../../data";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Container = styled.div`
    align-self: stretch;
    margin-bottom: 10px;
    flex: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 3px;
    box-shadow: 0px 5px 10px 0px #dddddd;
`;

const Top = styled.div`
    flex: 1;
`;

const Image = styled.img`
    max-width: 100%;
`;

const Bottom = styled.div`
    padding: 10px 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
`;

const Title = styled.h3``;

const Desc = styled.div`
    direction: rtl;
    margin-bottom: 30px;
    font-size: 16px;
    margin-bottom: 80px;
`;

const BottomBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const ReserveButton = styled.button`
    background-color: transparent;
    border: transparent;
    font-weight: 600;
    display: flex;
    align-items: center;
`;

const LikesButton = styled.button`
    background-color: transparent;
    border: transparent;
    font-weight: 600;
    display: flex;
    align-items: center;
`;

const BigCartRoom = () => {
    return (
        <Container>
            <Top>
                <Image src={bigRoom.image} />
            </Top>
            <Bottom>
                <Title>{bigRoom.title}</Title>
                <Desc>{bigRoom.desc}</Desc>
                <BottomBar>
                    <ReserveButton>
                        <ArrowBackIosIcon style={{ fontSize: "14px" }} />
                        رزرو اتاق
                    </ReserveButton>
                    <LikesButton>
                        12
                        <FavoriteBorderIcon
                            style={{ fontSize: "20px", marginLeft: "5px" }}
                        />
                    </LikesButton>
                </BottomBar>
            </Bottom>
        </Container>
    );
};

export default BigCartRoom;
