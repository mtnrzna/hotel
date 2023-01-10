import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { mobile } from "../.././responsive";
import LinkWrapper from ".././LinkWrapper";
import MenuIcon from "@mui/icons-material/Menu";
import Overlay from "./Overlay/Overlay";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 5px 10px 0px #dddddd;
    position: relative;
    ${mobile({
        width: "100vw",
        height: "90px",
        display: "flex",
        flexDirection: "column",
    })}
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
    ${mobile({})};
`;
const MenueIconContainer = styled.div`
    display: none;
    ${mobile({
        display: "flex",
        justifyContent: "center",
        alighItems: "center",
    })};
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
    ${mobile({ display: "none" })};
`;

const Login = styled.button`
    height: 30px;
    width: 120px;
    background-color: white;
    color: black;
    border: 0px;
    font-weight: 700;
    font-size: 16px;
    ${mobile({ display: "none" })};
`;

const Account = styled.button`
    height: 30px;
    width: 160px;
    background-color: white;
    color: black;
    border: 1px solid black;
    border-radius: 3px;
    font-weight: 700;
    font-size: 16px;
    ${mobile({ display: "none" })};
`;

const Center = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-around;
    ${mobile({ display: "none" })};
`;

const MenuItem = styled.div`
    margin: 0 10px;
    ${mobile({ display: "none" })};
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
    const { isAuthenticated } = useSelector((state) => state.user);

    const path = useLocation().pathname;
    const [overlayStatus, setOverlayStatus] = useState(false);
    const [lock, setLock] = useState(true);
    const body = document.querySelector("#root");

    useEffect(() => {
        setOverlayStatus(false);
    }, [path]);

    useEffect(() => {
        lock ? enableBodyScroll(body) : disableBodyScroll(body);
        setLock(!lock);
        window.scrollTo(0, 0);
    }, [overlayStatus]);

    const handleClick = () => {
        setOverlayStatus(!overlayStatus);
    };

    return (
        <div>
            {!overlayStatus && (
                <Container>
                    <Wrapper>
                        <Left>
                            <MenueIconContainer>
                                <MenuIcon
                                    onClick={handleClick}
                                    style={{ fontSize: "46px" }}
                                />
                            </MenueIconContainer>
                            {!isAuthenticated && (
                                <LinkWrapper to="/signup">
                                    <Signup>ثبت نام</Signup>
                                </LinkWrapper>
                            )}
                            {!isAuthenticated && (
                                <LinkWrapper to="/signin">
                                    <Login>ورود</Login>
                                </LinkWrapper>
                            )}
                            {isAuthenticated && (
                                <LinkWrapper to="/userpanelreserves">
                                    <Account>حساب کاربر</Account>
                                </LinkWrapper>
                            )}
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
                                    style={
                                        path === "/"
                                            ? { fontWeight: "bold" }
                                            : {}
                                    }
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
            )}
            {overlayStatus && <Overlay onClick={handleClick} />}
        </div>
    );
};

export default Navbar;
