import React from "react";
import styled from "styled-components";
import HomeSectionContainer from "../HomeSectionContainer";
import HomeSectionWrapper from "../HomeSectionWrapper";
import BigCartRoom from "./BigCartRoom/BigCartRoom";
import RoomList from "./RoomList/RoomList";

const Top = styled.h2`
    margin-bottom: 40px;
`;

const Bottom = styled.div`
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: stretch;
`;

const Reserve = () => {
    return (
        <HomeSectionContainer>
            <HomeSectionWrapper>
                <Top>رزرو اتاق</Top>
                <Bottom>
                    <BigCartRoom />
                    <RoomList />
                </Bottom>
            </HomeSectionWrapper>
        </HomeSectionContainer>
    );
};

export default Reserve;
