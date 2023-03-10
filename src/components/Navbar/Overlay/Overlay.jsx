import React from "react";
import styled from "styled-components";
import { mobile } from "../../.././responsive";
import LinkWrapper from "../../LinkWrapper";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

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

const Account = styled.button`
    width: 100%;
    padding: 8px 0;
    background-color: white;
    color: black;
    border: 1px solid black;
    border-radius: 3px;
    font-weight: 700;
    font-size: 16px;
    ${mobile({ display: "block" })};
`;
const MyAccount = ({ onClick }) => {
    const { isAuthenticated } = useSelector((state) => state.user);

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
                                ???????? ????????
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
                                ???????? ??????
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
                                ??????????
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
                                ???????????? ????
                            </MenuItem>
                        </LinkWrapper>
                    </MenuItems>

                    {!isAuthenticated && (
                        <LinkWrapper to="/signup">
                            <Signup>?????? ??????</Signup>
                        </LinkWrapper>
                    )}
                    {!isAuthenticated && (
                        <LinkWrapper to="/signin">
                            <Login>????????</Login>
                        </LinkWrapper>
                    )}
                    {isAuthenticated && (
                        <LinkWrapper
                            to="/my-account"
                            style={{ margin: "100px 0 20px 0" }}
                        >
                            <Account>???????? ??????????</Account>
                        </LinkWrapper>
                    )}
                </BottomWrapper>
            </Bottom>
        </Container>
    );
};

export default MyAccount;
