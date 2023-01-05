import React from "react";
import styled from "styled-components";
import Container from "../Container";
import Wrapper from "../Wrapper";
import ReserveList from "./ReserveList/ResereveList";

const Top = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

const Title = styled.h3``;

const Bottom = styled.div``;

const ReservesSection = () => {
    return (
        <Container>
            <Wrapper>
                <Top>
                    <Title>اتاق‌ها</Title>
                </Top>
                <Bottom>
                    <ReserveList />
                </Bottom>
            </Wrapper>
        </Container>
    );
};

export default ReservesSection;
