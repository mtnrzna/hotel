import React from "react";
import styled from "styled-components";
import SmallRoomCart from "./SmallRoomCart/SmallRoomCart";
import { rooms } from "../../../../data";
const Container = styled.div`
    flex: 7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
`;

const RoomList = () => {
    return (
        <Container>
            {rooms.map((room) => (
                <SmallRoomCart room={room} key={room.id} />
            ))}
        </Container>
    );
};

export default RoomList;
