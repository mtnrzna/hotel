import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 5px 10px 0px #dddddd;
    ${mobile({ height: "50px" })}
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
    width: 100px;
    height: 30px;
    margin-right: 20px;
    background-color: black;
    border-radius: 3px;
    color: white;
    font-weight: 700;
    font-size: 16px;
`;

const Login = styled.button`
    height: 30px;
    width: 100px;
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
`;

const Logo = styled.img`
    height: 30px;
    width: 30px;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Signup>ثبت نام</Signup>
                    <Login>ورود</Login>
                </Left>
                <Center>
                    <MenuItem>درباره ما</MenuItem>
                    <MenuItem>گالری</MenuItem>
                    <MenuItem>رزرو هتل</MenuItem>
                    <MenuItem>صفحه اصلی</MenuItem>
                </Center>
                <Right>
                    <Logo src="images/logo.png" />
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
