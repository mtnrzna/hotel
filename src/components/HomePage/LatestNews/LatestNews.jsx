import React, { useEffect } from "react";
import styled from "styled-components";
import HomeSectionContainer from "../HomeSectionContainer";
import HomeSectionWrapper from "../HomeSectionWrapper";
import { news } from "../../../data";
import Slider from "./Slider/Slider";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getChosenNews } from "../../../actions/client/newsAction";

const Top = styled.h2`
    margin-bottom: 40px;
`;

const Bottom = styled.div`
    width: 100%;
`;

const LatestNews = () => {
    const { chosenNews, loading, error } = useSelector(
        (state) => state.chosenNews
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getChosenNews());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
    }, [dispatch, loading, error]);

    return (
        <HomeSectionContainer>
            <HomeSectionWrapper>
                <Top>آخرین اخبار هتل ما</Top>
                <Bottom>
                    <Slider news={chosenNews} />
                </Bottom>
            </HomeSectionWrapper>
        </HomeSectionContainer>
    );
};

export default LatestNews;
