import React from "react";
import styled from "styled-components";
import Container from "../Container";
import Wrapper from "../Wrapper";
import { useLocation } from "react-router-dom";
import { long_news } from "../../data";

const Image = styled.img`
    width: 500px;
    height: 500px;
`;

const Title = styled.h4``;

const Desc = styled.div`
    margin: 10px 20px;
    direction: rtl;
`;

const NewsSection = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    return (
        <Container>
            <Wrapper>
                <Image src={long_news.image} />
                <Title>{long_news.title}</Title>
                <Desc>{long_news.desc}</Desc>
            </Wrapper>
        </Container>
    );
};

export default NewsSection;
