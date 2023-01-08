import React from "react";
import styled from "styled-components";
import LinkWrapper from "../../../LinkWrapper";
import LikesButton from "../../../UI/LikesButton";
import CapacityButton from "../../../UI/CapacityButton";
import TemplateButton from "../../../UI/TemplateButton";
import { mobile } from "../../../../responsive";

const Container = styled.div`
    padding: 30px 0;
    height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mobile({
        height: "100%",
        padding: "0 30px 30px 30px",
        marginBottom: "30px",
        flexDirection: "column",
        boxShadow: "0px 5px 10px 0px #dddddd",
    })}
`;

const Left = styled.div`
    height: 100%;
    flex: 5;
    overflow: hidden;
    ${mobile({
        width: "100%",
    })}
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    ${mobile({
        height: "300px",
        width: "100%",
    })}
`;

const Right = styled.div`
    height: 100%;
    margin-left: 60px;
    flex: 7;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    ${mobile({
        marginLeft: "0",
        padding: "0 20px",
    })}
`;

const Title = styled.h4``;

const Desc = styled.div`
    margin-bottom: 40px;
    text-align: right;
`;

const BottomBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
`;

const IconsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ReserveButton = styled(TemplateButton)`
    height: 35px;
    width: 150px;
    ${mobile({
        height: "40px",
    })}
`;

const Reserve = ({ item }) => {
    return (
        <Container>
            <Left>
                <Image src={item.image} />
            </Left>
            <Right>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <BottomBar>
                    <IconsWrapper>
                        <LikesButton likeNumber={12} />
                        <CapacityButton capacityNumber={4} />
                    </IconsWrapper>
                    <LinkWrapper to={`/reserve/${item.id}`}>
                        <ReserveButton>رزرو</ReserveButton>
                    </LinkWrapper>
                </BottomBar>
            </Right>
        </Container>
    );
};

export default Reserve;
