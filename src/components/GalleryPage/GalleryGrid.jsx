import React from "react";
import styled from "styled-components";
import Container from "../Container";
import Wrapper from "../Wrapper";
import { mobile } from "../../responsive";

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${mobile({
        width: "100%",
    })}
`;

const Column = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mobile({
        height: "100px",
        width: "100%",
        display: "block",
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
    return (
        <Container>
            <Wrapper>
                <Top>اتاق‌ها و سوییت‌ها</Top>
                <Bottom>
                    <Grid>
                        <Column>
                            <ImageContainer styles={{ flex: "1" }}>
                                <Image src="/images/gallery/pic1.png" />
                            </ImageContainer>
                            <ImageContainer styles={{ flex: "2" }}>
                                <Image src="/images/gallery/pic2.png" />
                            </ImageContainer>
                        </Column>
                        <Column>
                            <ImageContainer styles={{ flex: 1 }}>
                                <Image src="/images/gallery/pic3.png" />
                            </ImageContainer>
                        </Column>
                        <Column>
                            <ImageContainer styles={{ flex: 2 }}>
                                <Image src="/images/gallery/pic4.png" />
                            </ImageContainer>
                            <ImageContainer styles={{ flex: 1 }}>
                                <Image src="/images/gallery/pic5.png" />
                            </ImageContainer>
                        </Column>
                        <Column>
                            <ImageContainer styles={{ flex: 1 }}>
                                <Image src="/images/gallery/pic6.png" />
                            </ImageContainer>
                            <ImageContainer styles={{ flex: 1 }}>
                                <Image src="/images/gallery/pic7.png" />
                            </ImageContainer>
                            <ImageContainer styles={{ flex: 1 }}>
                                <Image src="/images/gallery/pic8.png" />
                            </ImageContainer>
                        </Column>
                        <Column>
                            <ImageContainer styles={{ flex: 1 }}>
                                <Image src="/images/gallery/pic9.png" />
                            </ImageContainer>
                        </Column>
                    </Grid>
                </Bottom>
            </Wrapper>
        </Container>
    );
};

export default GalleryGrid;
