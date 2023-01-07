import React from "react";
import styled from "styled-components";
import { bigRoom } from "../.././../../data";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LinkWrapper from "../../../LinkWrapper";
import truncateText from "../../../../utils/truncateText";

const Container = styled.div`
    margin: 0 10px 10px 0;
    flex: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 3px;
    box-shadow: 0px 5px 10px 0px #dddddd;
    box-sizing: border-box;
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
    justify-content: space-between;
`;

const Title = styled.h3`
    margin: 0 0 10px 0;
`;

const Desc = styled.div`
    direction: rtl;
    margin-bottom: 50px;
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
                <LinkWrapper to={`/reserve/${bigRoom.id}`}>
                    <Title>{truncateText(bigRoom.title, 50)}</Title>
                </LinkWrapper>
                <Desc>{truncateText(bigRoom.desc, 100)}</Desc>
                <BottomBar>
                    <LinkWrapper to={`/reserve/${bigRoom.id}`}>
                        <ReserveButton>
                            <ArrowBackIosIcon style={{ fontSize: "14px" }} />
                            رزرو اتاق
                        </ReserveButton>
                    </LinkWrapper>
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
