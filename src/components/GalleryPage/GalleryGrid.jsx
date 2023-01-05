import React from "react";
import Container from "../Container";
import Wrapper from "../Wrapper";
import styled from "styled-components";

const Top = styled.h3`
    margin-bottom: 20px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Grid = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Column = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImageContainer = styled.div`
    max-height: 350px;
    margin: 10px;
    overflow: hidden;
`;

const Image = styled.img`
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
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
