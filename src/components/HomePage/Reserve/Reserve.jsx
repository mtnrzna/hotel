import React from "react";
import styled from "styled-components";
import BigCartRoom from "./BigCartRoom/BigCartRoom";
import RoomList from "./RoomList/RoomList";

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
    align-items: center;
`;

const Top = styled.h2`
    margin-bottom: 40px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Reserve = () => {
    return (
        <Container>
            <Wrapper>
                <Top>رزرو اتاق</Top>
                <Bottom>
                    <BigCartRoom />
                    <RoomList />
                </Bottom>
            </Wrapper>
        </Container>
    );
};

export default Reserve;
