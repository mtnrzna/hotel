import React from "react";
import styled from "styled-components";
import HomeSectionContainer from "../HomeSectionContainer";
import HomeSectionWrapper from "../HomeSectionWrapper";
import { news } from "../../../data";
import Slider from "./Slider/Slider";

const Top = styled.h2`
    margin-bottom: 40px;
`;

const Bottom = styled.div`
    width: 100%;
`;

const LatestNews = () => {
    return (
        <HomeSectionContainer>
            <HomeSectionWrapper>
                <Top>آخرین اخبار هتل ما</Top>
                <Bottom>
                    <Slider news={news} />
                </Bottom>
            </HomeSectionWrapper>
        </HomeSectionContainer>
    );
};

export default LatestNews;
