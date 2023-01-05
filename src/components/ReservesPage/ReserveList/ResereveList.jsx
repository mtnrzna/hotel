import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Pagination from "../../Pagination/Pagination";
import Reserve from "./Reserve/Reserve";
import { reserves as items } from "../../../data";

const ItemsList = styled.div``;

const itemsPerPage = 5;

const ReserveList = () => {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };
    return (
        <>
            <ItemsList>
                {currentItems?.map((item) => (
                    <Reserve item={item} key={item.id} />
                ))}
            </ItemsList>
            <Pagination
                handlePageClick={handlePageClick}
                pageCount={pageCount}
            />
        </>
    );
};

export default ReserveList;
