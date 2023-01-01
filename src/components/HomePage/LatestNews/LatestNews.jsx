import React from "react";
import styled from "styled-components";
import { news } from "../../../data";
import Slider from "./Slider/Slider";

const Container = styled.div`
    height: calc(100vh + 150px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const Top = styled.h2`
    margin-bottom: 40px;
`;

const Bottom = styled.div``;

const LatestNews = () => {
    return (
        <Container>
            <Wrapper>
                <Top>آخرین خبار هتل ما</Top>
                <Bottom>
                    <Slider news={news} />
                </Bottom>
            </Wrapper>
        </Container>
    );
};

export default LatestNews;
