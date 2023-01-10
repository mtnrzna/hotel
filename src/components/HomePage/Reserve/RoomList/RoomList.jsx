import React, { useEffect } from "react";
import styled from "styled-components";
import SmallRoomCart from "./SmallRoomCart/SmallRoomCart";
import { rooms } from "../../../../data";
import { useSelector } from "react-redux";

const Container = styled.div`
    flex: 7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
`;

const RoomList = () => {
    const { chosenRooms } = useSelector((state) => state.chosenRooms);

    return (
        <Container>
            {chosenRooms?.slice(0, 3).map((room) => (
                <SmallRoomCart room={room} key={room.id} />
            ))}
        </Container>
    );
};

export default RoomList;
