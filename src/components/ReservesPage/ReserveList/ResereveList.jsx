import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Pagination from "../../Pagination/Pagination";
import Reserve from "./Reserve/Reserve";
import { reserves as items } from "../../../data";
import { useDispatch, useSelector } from "react-redux";
import { getRoomsByPage } from "../../../actions/client/roomAction";
import { toast } from "react-toastify";
import BackdropLoader from "../../Layouts/BackdropLoader";

const ItemsList = styled.div``;

const itemsPerPage = 5;

const ReserveList = () => {
    const [pageCount, setPageCount] = useState(0);

    const { roomsAndPageNumber, loading, error } = useSelector(
        (state) => state.roomsByPage
    );
    const { rooms, totalPageNumber } = roomsAndPageNumber
        ? roomsAndPageNumber
        : {};

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRoomsByPage(pageCount));
    }, [dispatch, pageCount]);

    useEffect(() => {
        if (error) toast.error(error);
    }, [dispatch, loading, error]);

    const handlePageClick = (e) => {
        setPageCount(e.selected);
    };

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [roomsAndPageNumber]);

    return (
        <>
            {loading && <BackdropLoader />}
            <ItemsList>
                {rooms?.map((room) => (
                    <Reserve room={room} key={room.id} />
                ))}
            </ItemsList>
            <Pagination
                handlePageClick={handlePageClick}
                pageCount={totalPageNumber}
            />
        </>
    );
};

export default ReserveList;
