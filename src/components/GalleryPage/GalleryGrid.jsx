import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Container from "../Container";
import Wrapper from "../Wrapper";
import { mobile } from "../../responsive";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getGallery } from "../../actions/client/galleryAction";
import BackdropLoader from "../Layouts/BackdropLoader";
import BASE_URL from "../../BASE_URL";

const Top = styled.h3`
    margin-bottom: 20px;
    ${mobile({
        display: "none",
    })}
`;

const Bottom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${mobile({
        width: "100%",
    })}
`;
const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    justify-items: stretch;
    ${mobile({
        width: "100%",
    })}
`;

const ImageContainer = styled.div`
    max-height: 350px;
    margin: 10px;
    overflow: hidden;
    ${mobile({
        height: "200px",
        width: "100%",
        margin: "10px 0",
        ObjectFit: "fill",
    })}
`;

const Image = styled.img`
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
    ${mobile({
        height: "100%",
        width: "100%",
    })}
`;

const GalleryGrid = () => {
    const dispatch = useDispatch();

    const { loading, error, gallery } = useSelector((state) => state.gallery);

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
        dispatch(getGallery());
    }, [dispatch, error]);
    console.log(gallery);
    return (
        <>
            {loading && <BackdropLoader />}
            <Container>
                <Wrapper>
                    <Top>اتاق‌ها و سوییت‌ها</Top>
                    <Bottom>
                        <Grid>
                            {gallery.slice(0, 10).map((item) => (
                                <ImageContainer key={item.id}>
                                    <Image src={`${BASE_URL + item.image}`} />
                                </ImageContainer>
                            ))}
                        </Grid>
                    </Bottom>
                </Wrapper>
            </Container>
        </>
    );
};

export default GalleryGrid;
