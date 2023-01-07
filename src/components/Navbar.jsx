import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import LinkWrapper from "./LinkWrapper";

const Container = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 5px 10px 0px #dddddd;
    position: relative;
    z-index: 10 ${mobile({ height: "50px" })};
`;

const Wrapper = styled.div`
    width: 80%;
    padding: 20px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0" })};
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Signup = styled.button`
    height: 30px;
    width: 120px;
    margin-right: 20px;
    background-color: black;
    border-radius: 3px;
    color: white;
    font-weight: 700;
    font-size: 16px;
`;

const Login = styled.button`
    height: 30px;
    width: 120px;
    background-color: white;
    color: black;
    border: 0px;
    font-weight: 700;
    font-size: 16px;
`;

const Center = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-around;
`;

const MenuItem = styled.div`
    margin: 0 10px;
    cursor: pointer;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.img`
    height: 30px;
    width: 30px;
`;

const Navbar = () => {
    const path = useLocation().pathname;
    return (
        <Container>
            <Wrapper>
                <Left>
                    <LinkWrapper to="/signup">
                        <Signup>ثبت نام</Signup>
                    </LinkWrapper>
                    <LinkWrapper to="/signin">
                        <Login>ورود</Login>
                    </LinkWrapper>
                </Left>
                <Center>
                    <LinkWrapper to="/about-us">
                        <MenuItem
                            style={
                                path === "/about-us"
                                    ? { fontWeight: "bold" }
                                    : {}
                            }
                        >
                            درباره ما
                        </MenuItem>
                    </LinkWrapper>
                    <LinkWrapper to="/gallery">
                        <MenuItem
                            style={
                                path === "/gallery"
                                    ? { fontWeight: "bold" }
                                    : {}
                            }
                        >
                            گالری
                        </MenuItem>
                    </LinkWrapper>
                    <LinkWrapper to="/reserves">
                        <MenuItem
                            style={
                                path === "/reserves"
                                    ? { fontWeight: "bold" }
                                    : {}
                            }
                        >
                            رزرو هتل
                        </MenuItem>
                    </LinkWrapper>
                    <LinkWrapper to="/">
                        <MenuItem
                            style={path === "/" ? { fontWeight: "bold" } : {}}
                        >
                            صفحه اصلی
                        </MenuItem>
                    </LinkWrapper>
                </Center>
                <Right>
                    <LinkWrapper to="/">
                        <ImageContainer>
                            <Logo src="/images/logo.png" />
                        </ImageContainer>
                    </LinkWrapper>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
