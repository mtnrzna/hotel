import React from "react";
import styled from "styled-components";
import { mobile } from "../../.././responsive";
import LinkWrapper from "../../LinkWrapper";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation } from "react-router-dom";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    z-index: 100;
`;
const Top = styled.div`
    height: 80px;
    width: 80%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const MenueIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Bottom = styled.div`
    height: calc(100vh - 80px);
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BottomWrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
`;

const MenuItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
`;

const MenuItem = styled.div`
    margin: 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
`;

const Signup = styled.button`
    width: 100%;
    padding: 8px 0;
    margin: 100px 0 20px 0;
    background-color: black;
    border-radius: 6px;
    color: white;
    font-size: 16px;
`;

const Login = styled.button`
    width: 100%;
    padding: 8px 0;
    background-color: white;
    color: black;
    border: 0px;
    font-weight: 700;
    font-size: 16px;
`;
const Overlay = ({ onClick }) => {
    const path = useLocation().pathname;
    return (
        <Container>
            <Top>
                <MenueIconContainer>
                    <CloseIcon onClick={onClick} style={{ fontSize: "46px" }} />
                </MenueIconContainer>
            </Top>
            <Bottom>
                <BottomWrapper>
                    <MenuItems>
                        <LinkWrapper to="/">
                            <MenuItem
                                style={
                                    path === "/" ? { fontWeight: "bold" } : {}
                                }
                            >
                                صفحه اصلی
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
                    </MenuItems>
                    <LinkWrapper to="/signup">
                        <Signup>ثبت نام</Signup>
                    </LinkWrapper>
                    <LinkWrapper to="/signin">
                        <Login>ورود</Login>
                    </LinkWrapper>
                </BottomWrapper>
            </Bottom>
        </Container>
    );
};

export default Overlay;
