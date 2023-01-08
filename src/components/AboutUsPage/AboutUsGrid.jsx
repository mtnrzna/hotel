import React from "react";
import styled from "styled-components";
import Container from "../Container";
import Wrapper from "../Wrapper";
import { mobile } from "../../responsive";

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
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
    justify-content: center;
    align-items: center;
    ${mobile({
        height: "100px",
        width: "100%",
        marginBottom: "30px",
        flexDirection: "column",
    })}
`;

const ImageContainer = styled.div`
    flex: 1;
    max-height: 350px;
    margin: 10px;
    overflow: hidden;
    ${mobile({
        width: "100%",
        mergin: "0",
    })}
`;

const Image = styled.img`
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
`;

const InfoSec = styled.div`
    flex: 1;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    direction: rtl;
`;

const Title = styled.h3`
    padding: 0 0 15px 0;
    ${mobile({
        width: "100%",
        paddingBottom: "5px",
        fontSize: "16px",
        textAlign: "center",
    })}
`;

const Desc = styled.div`
    margin-left: 10px;
    ${mobile({ fontSize: "14px", textAlign: "center" })}
`;

const AboutUsGrid = () => {
    return (
        <Container>
            <Wrapper>
                <Grid>
                    <Column>
                        <ImageContainer>
                            <Image src="/images/aboutus/pic1.png" />
                        </ImageContainer>
                        <InfoSec>
                            <Title>ارایه خدمات آنلاین رزرو هتل</Title>
                            <Desc>
                                مرکز ملی رزرواسیون اماکن اقامتی کشور به عنوان
                                اولین و تنها مرکز رسمی رزرواسیون هتل در ایران که
                                موافقت اصولی سازمان میراث فرهنگی، صنایع دستی و
                                گردشگری را در این زمینه دارا است، فعالیت خود را
                                در زمینه رزرواسیون و اسکان مکانیزه گردشگران از
                                سال ۱۳۸۵ آغاز کرد.
                            </Desc>
                        </InfoSec>
                    </Column>
                    <Column reverse="true">
                        <ImageContainer>
                            <Image src="/images/aboutus/pic2.png" />
                        </ImageContainer>
                        <InfoSec style={{ marginRight: "20px" }}>
                            <Title>ارایه خدمات آنلاین رزرو هتل</Title>
                            <Desc>
                                مرکز ملی رزرواسیون اماکن اقامتی کشور به عنوان
                                اولین و تنها مرکز رسمی رزرواسیون هتل در ایران که
                                موافقت اصولی سازمان میراث فرهنگی، صنایع دستی و
                                گردشگری را در این زمینه دارا است، فعالیت خود را
                                در زمینه رزرواسیون و اسکان مکانیزه گردشگران از
                                سال ۱۳۸۵ آغاز کرد.
                            </Desc>
                        </InfoSec>
                    </Column>
                    <Column>
                        <ImageContainer>
                            <Image src="/images/aboutus/pic3.png" />
                        </ImageContainer>
                        <InfoSec>
                            <Title>ارایه خدمات آنلاین رزرو هتل</Title>
                            <Desc>
                                مرکز ملی رزرواسیون اماکن اقامتی کشور به عنوان
                                اولین و تنها مرکز رسمی رزرواسیون هتل در ایران که
                                موافقت اصولی سازمان میراث فرهنگی، صنایع دستی و
                                گردشگری را در این زمینه دارا است، فعالیت خود را
                                در زمینه رزرواسیون و اسکان مکانیزه گردشگران از
                                سال ۱۳۸۵ آغاز کرد.
                            </Desc>
                        </InfoSec>
                    </Column>
                </Grid>
            </Wrapper>
        </Container>
    );
};

export default AboutUsGrid;
