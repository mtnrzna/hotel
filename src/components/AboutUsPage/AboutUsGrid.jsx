import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f6f6f6;
`;

const Wrapper = styled.div`
    width: 80%;
    padding: 50px 20px;
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    box-shadow: 0px 5px 10px 0px #dddddd;
`;

const Top = styled.h3`
    margin-bottom: 20px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Grid = styled.div`
    padding: 0 20px;
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
    flex: 1;
    max-height: 350px;
    margin: 10px;
    overflow: hidden;
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
`;

const Title = styled.h4`
    padding: 0 0 15px 0;
`;

const Desc = styled.div``;

const AboutUsGrid = () => {
    return (
        <Container>
            <Wrapper>
                <Top>اتاق‌ها و سوییت‌ها</Top>
                <Bottom>
                    <Grid>
                        <Column>
                            <ImageContainer>
                                <Image src="images/aboutus/pic1.png" />
                            </ImageContainer>
                            <InfoSec style={{ direction: "rtl" }}>
                                <Title>ارایه خدمات آنلاین رزرو هتل</Title>
                                <Desc>
                                    مرکز ملی رزرواسیون اماکن اقامتی کشور به
                                    عنوان اولین و تنها مرکز رسمی رزرواسیون هتل
                                    در ایران که موافقت اصولی سازمان میراث
                                    فرهنگی، صنایع دستی و گردشگری را در این زمینه
                                    دارا است، فعالیت خود را در زمینه رزرواسیون و
                                    اسکان مکانیزه گردشگران از سال ۱۳۸۵ آغاز کرد.
                                </Desc>
                            </InfoSec>
                        </Column>
                        <Column>
                            <InfoSec style={{ direction: "ltr" }}>
                                <Title>ارایه خدمات آنلاین رزرو هتل</Title>
                                <Desc style={{ padding: "0 50px 0 0" }}>
                                    مرکز ملی رزرواسیون اماکن اقامتی کشور به
                                    عنوان اولین و تنها مرکز رسمی رزرواسیون هتل
                                    در ایران که موافقت اصولی سازمان میراث
                                    فرهنگی، صنایع دستی و گردشگری را در این زمینه
                                    دارا است، فعالیت خود را در زمینه رزرواسیون و
                                    اسکان مکانیزه گردشگران از سال ۱۳۸۵ آغاز کرد.
                                </Desc>
                            </InfoSec>
                            <ImageContainer>
                                <Image src="images/aboutus/pic2.png" />
                            </ImageContainer>
                        </Column>
                        <Column>
                            <ImageContainer>
                                <Image src="images/aboutus/pic3.png" />
                            </ImageContainer>
                            <InfoSec style={{ direction: "rtl" }}>
                                <Title>ارایه خدمات آنلاین رزرو هتل</Title>
                                <Desc>
                                    مرکز ملی رزرواسیون اماکن اقامتی کشور به
                                    عنوان اولین و تنها مرکز رسمی رزرواسیون هتل
                                    در ایران که موافقت اصولی سازمان میراث
                                    فرهنگی، صنایع دستی و گردشگری را در این زمینه
                                    دارا است، فعالیت خود را در زمینه رزرواسیون و
                                    اسکان مکانیزه گردشگران از سال ۱۳۸۵ آغاز کرد.
                                </Desc>
                            </InfoSec>
                        </Column>
                    </Grid>
                </Bottom>
            </Wrapper>
        </Container>
    );
};

export default AboutUsGrid;
