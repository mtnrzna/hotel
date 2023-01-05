import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { SocialIcon } from "react-social-icons";

const Container = styled.div`
    height: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 5px 10px 0px #dddddd;
`;

const Wrapper = styled.div`
    margin-top: 15px;
    width: 80%;
    padding: 20px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    align-self: stretch;
    padding-top: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const Logo = styled.img`
    height: 30px;
    width: 30px;
`;

const SocialMedias = styled.div`
    margin-top: 20px;
`;

const SocialMedia = styled(SocialIcon)`
    width: 25px !important;
    height: 25px !important;
    margin-right: 10px;
`;

const Center = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    direction: rtl;
`;

const Column = styled.div`
    padding: 20px;
`;

const ColumnTitle = styled.div`
    font-weight: 900;
    border-bottom: 1px solid black;
`;
const ColumnItem = styled.div``;

const Right = styled.div`
    flex: 1;
    align-self: stretch;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    direction: rtl;
`;

const AboutUsTitle = styled.div`
    font-weight: 900;
`;

const AboutUsDesc = styled.div``;

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo src="/images/logo.png" />
                    <SocialMedias>
                        <SocialMedia url="https://instagram.com" />
                        <SocialMedia url="https://telegram.com" />
                        <SocialMedia url="https://whatsapp.com" />
                        <SocialMedia url="https://twitter.com" />
                    </SocialMedias>
                </Left>
                <Center>
                    <Column>
                        <ColumnTitle>میانبر</ColumnTitle>
                        <ColumnItem>صفحه اصلی</ColumnItem>
                        <ColumnItem>درباره ما </ColumnItem>
                        <ColumnItem>تماس با ما</ColumnItem>
                        <ColumnItem>قوانین و مقررات</ColumnItem>
                    </Column>
                    <Column>
                        <ColumnTitle>میانبر</ColumnTitle>
                        <ColumnItem>صفحه اصلی</ColumnItem>
                        <ColumnItem>درباره ما </ColumnItem>
                        <ColumnItem>تماس با ما</ColumnItem>
                        <ColumnItem>قوانین و مقررات</ColumnItem>
                    </Column>
                    <Column>
                        <ColumnTitle>میانبر</ColumnTitle>
                        <ColumnItem>صفحه اصلی</ColumnItem>
                        <ColumnItem>درباره ما </ColumnItem>
                        <ColumnItem>تماس با ما</ColumnItem>
                    </Column>
                </Center>
                <Right>
                    <AboutUsTitle>درباره ما</AboutUsTitle>
                    <AboutUsDesc>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </AboutUsDesc>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Footer;
