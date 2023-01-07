import React from "react";
import styled from "styled-components";
import LinkWrapper from "../../LinkWrapper";
import TemplateButton from "../../UI/TemplateButton";

const Container = styled.div`
    height: calc(100vh - 80px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    margin-right: 5%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Hero = styled.img`
    max-width: 100%;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
`;

const Title = styled.h1``;

const Desc = styled.div`
    direction: rtl;
    margin-bottom: 30px;
    font-size: 16px;
`;

const ReserveButton = styled(TemplateButton)`
    height: 35px;
    width: 150px;
`;

const Intro = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Hero src="/images/hero.png" />
                </Left>
                <Right>
                    <Title>هتل بزرگ پنج ستاره یوسف</Title>
                    <Desc>
                        هتل بزرگ پنج ستاره یوسف با الهام از طرح شکوهمند تخت
                        جمشید در زمینی با وسعت دوازده هکتار در شمال شرق جزیره
                        زیبای کیش نزدیک به ساحل شرقی در سال 1382 توسط بهترین
                        معماران ایرانی ساخته شده است
                    </Desc>
                    <ReserveButton>
                        <LinkWrapper to="/reserves">رزرو هتل</LinkWrapper>
                    </ReserveButton>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Intro;
