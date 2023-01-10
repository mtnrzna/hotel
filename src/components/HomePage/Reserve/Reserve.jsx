import React, { useEffect } from "react";
import styled from "styled-components";
import HomeSectionContainer from "../HomeSectionContainer";
import HomeSectionWrapper from "../HomeSectionWrapper";
import BigCartRoom from "./BigCartRoom/BigCartRoom";
import RoomList from "./RoomList/RoomList";
import { mobile } from "../../../responsive";
import { useDispatch, useSelector } from "react-redux";
import { getChosenRooms } from "../../../actions/client/roomAction";
import { toast } from "react-toastify";

const Top = styled.h2`
    margin-bottom: 40px;
`;

const Bottom = styled.div`
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: stretch;
    ${mobile({
        width: "100%",
    })}
`;

const Reserve = () => {
    const { loading, error } = useSelector((state) => state.chosenRooms);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getChosenRooms());
    }, [dispatch]);

    useEffect(() => {
        if (error) toast.error(error);
    }, [dispatch, loading, error]);
    return (
        <HomeSectionContainer>
            <HomeSectionWrapper>
                <Top>رزرو اتاق</Top>
                {!loading && (
                    <Bottom>
                        <BigCartRoom />
                        <RoomList />
                    </Bottom>
                )}
            </HomeSectionWrapper>
        </HomeSectionContainer>
    );
};

export default Reserve;
