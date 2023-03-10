import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { SocialIcon } from "react-social-icons";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { ToastContainer } from "react-toastify";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 5px 10px 0px #dddddd;
`;

const Wrapper = styled.div`
    margin: 10px 0;
    width: 80%;
    padding: 20px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: column;
    ${mobile({
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "40px",
    })}
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
    ${mobile({
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "40px",
    })}
`;

const Column = styled.div`
    padding: 0 10px 10px 10px;
    ${mobile({
        justifyContent: "center",
        alignItems: "center",
    })}
`;

const ColumnTitle = styled.h5`
    margin: 0 0 0 10px;
    border-bottom: 1px solid black;
    ${mobile({
        marginBottom: "15px",
        paddingBottom: "15px",
        fontSize: "13px",
        fontWeight: "bold",
        textAlign: "center",
    })}
`;

const ColumnItem = styled.div`
    font-size: 13px;
    font-weight: 400;
    ${mobile({
        marginBottom: "10px",
        fontSize: "13px",
        textAlign: "center",
    })}
`;

const Right = styled.div`
    flex: 1;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    direction: rtl;
    ${mobile({
        alignItems: "center",
    })}
`;

const AboutUsTitle = styled.h4`
    margin: 0 0 0 10px;
    border-bottom: 1px solid black;
    ${mobile({
        marginBottom: "15px",
        paddingBottom: "15px",
        fontSize: "16px",
        fontWeight: "bold",
        border: "0",
        textAlign: "center",
    })}
`;

const AboutUsDesc = styled.div`
    font-size: 13px;
    font-weight: 400;
    ${mobile({
        marginBottom: "10px",
        fontSize: "13px",
        fontWeight: "500",
        textAlign: "center",
    })}
`;

const Footer = () => {
    const { height, width } = useWindowDimensions();

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
                        <ColumnTitle>????????????</ColumnTitle>
                        <ColumnItem>???????? ????????</ColumnItem>
                        <ColumnItem>???????????? ???? </ColumnItem>
                        <ColumnItem>???????? ???? ????</ColumnItem>
                        <ColumnItem>???????????? ?? ????????????</ColumnItem>
                    </Column>
                    <Column
                        style={{ display: `${width > 414 ? "block" : "none"}` }}
                    >
                        <ColumnTitle>????????????</ColumnTitle>
                        <ColumnItem>???????? ????????</ColumnItem>
                        <ColumnItem>???????????? ???? </ColumnItem>
                        <ColumnItem>???????? ???? ????</ColumnItem>
                        <ColumnItem>???????????? ?? ????????????</ColumnItem>
                    </Column>
                    <Column
                        style={{ display: `${width > 414 ? "block" : "none"}` }}
                    >
                        <ColumnTitle>????????????</ColumnTitle>
                        <ColumnItem>???????? ????????</ColumnItem>
                        <ColumnItem>???????????? ???? </ColumnItem>
                        <ColumnItem>???????? ???? ????</ColumnItem>
                    </Column>
                </Center>
                <Right>
                    <AboutUsTitle>???????????? ????</AboutUsTitle>
                    <AboutUsDesc>
                        ???????? ???????????? ?????? ???????????? ???? ?????????? ?????????? ?????????????? ???? ????????
                        ?????? ?? ???? ?????????????? ???? ???????????? ???????????? ?????? ?????????????? ?? ????????
                        ???????? ?????????????? ?? ???????? ???? ???????? ?? ?????????????????? ???? ???????? ??????
                    </AboutUsDesc>
                </Right>
                <ToastContainer
                    position={width > 414 ? "top-right" : "top-center"}
                />
            </Wrapper>
        </Container>
    );
};

export default Footer;
