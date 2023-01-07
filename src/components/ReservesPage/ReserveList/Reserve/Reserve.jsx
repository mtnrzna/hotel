import React from "react";
import styled from "styled-components";
import LinkWrapper from "../../../LinkWrapper";
import LikesButton from "../../../UI/LikesButton";
import TemplateButton from "../../../UI/TemplateButton";

const Container = styled.div`
    padding: 30px 0;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Left = styled.div`
    height: 100%;
    flex: 5;
    overflow: hidden;
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

const Right = styled.div`
    margin-left: 60px;
    flex: 7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`;

const Title = styled.h4``;

const Desc = styled.div`
    margin-bottom: 40px;
`;

const BottomBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
`;

const ReserveButton = styled(TemplateButton)`
    height: 35px;
    width: 150px;
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
                    <LikesButton likeNumber={12} />
                    <LinkWrapper to={`/reserve/${item.id}`}>
                        <ReserveButton>رزرو</ReserveButton>
                    </LinkWrapper>
                </BottomBar>
            </Right>
        </Container>
    );
};

export default Reserve;
