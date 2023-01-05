import React from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LikesButton from "../../../../UI/LikesButton";
import LinkWrapper from "../../../../LinkWrapper";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    box-shadow: 0px 5px 10px 0px #dddddd;
    margin: 0 0 10px 10px;
`;

const Left = styled.div`
    flex: 5;
`;

const Image = styled.img`
    max-width: 100%;
`;

const Right = styled.div`
    flex: 7;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
`;

const Title = styled.h3``;

const Desc = styled.div`
    direction: rtl;
    margin-bottom: 40px;
    font-size: 16px;
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

const SmallRoomCart = ({ room }) => {
    return (
        <Container>
            <Left>
                <Image src={room.image} />
            </Left>
            <Right>
                <LinkWrapper to={`/reserve/${room.id}`}>
                    <Title>{room.title}</Title>
                </LinkWrapper>
                <Desc>{room.desc}</Desc>
                <BottomBar>
                    <LinkWrapper to={`/reserve/${room.id}`}>
                        <ReserveButton>
                            <ArrowBackIosIcon style={{ fontSize: "14px" }} />
                            رزرو اتاق
                        </ReserveButton>
                    </LinkWrapper>
                    <LikesButton likeNumber={12} />
                </BottomBar>
            </Right>
        </Container>
    );
};

export default SmallRoomCart;
