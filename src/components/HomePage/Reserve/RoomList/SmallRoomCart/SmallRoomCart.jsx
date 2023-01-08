import React from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LikesButton from "../../../../UI/LikesButton";
import CapacityButton from "../../../../UI/CapacityButton";
import LinkWrapper from "../../../../LinkWrapper";
import truncateText from "../../../../../utils/truncateText";
import { mobile } from "../../../../../responsive";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    box-shadow: 0px 5px 10px 0px #dddddd;
    margin-bottom: 10px;
`;

const Left = styled.div`
    flex: 5;
    height: 200px;
    overflow: hidden;
    margin: 0 0 10px 0;
    ${mobile({
        flex: "1",
        height: "100%",
    })}
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Right = styled.div`
    height: 100%;
    flex: 7;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    box-sizing: border-box;
    ${mobile({
        flex: "1",
    })}
`;

const Title = styled.h3`
    margin: 0 0 10px 0;
    ${mobile({
        fontSize: "16px",
        fontWeight: "bold",
    })}
`;

const Desc = styled.div`
    direction: rtl;
    margin: 0 0 10px 0;
    font-size: 14px;
    ${mobile({
        fontSize: "14px",
    })}
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
    ${mobile({
        fontSize: "14px",
        fontWeight: "bold",
    })}
`;

const IconsWrapper = styled.div`
    display: flex;
    justify-content: center;
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
                    <Title>{truncateText(room.title, 50)}</Title>
                </LinkWrapper>
                <Desc>{truncateText(room.desc, 100)}</Desc>
                <BottomBar>
                    <LinkWrapper to={`/reserve/${room.id}`}>
                        <ReserveButton>
                            <ArrowBackIosIcon style={{ fontSize: "14px" }} />
                            رزرو اتاق
                        </ReserveButton>
                    </LinkWrapper>
                    <IconsWrapper>
                        <LikesButton likeNumber={18} />
                        <CapacityButton capacityNumber={4} />
                    </IconsWrapper>
                </BottomBar>
            </Right>
        </Container>
    );
};

export default SmallRoomCart;
