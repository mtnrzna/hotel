import React from "react";
import styled from "styled-components";
import Container from "../Container";
import Wrapper from "../Wrapper";
import { mobile } from "../../responsive";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Left = styled.div`
    width: 50%;
    height: 70vh;
    overflow: hidden;
    ${mobile({
        display: "none",
    })}
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    direction: rtl;
    ${mobile({
        padding: "15px",
    })}
`;

const Content = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${mobile({
        width: "100%",
    })}
`;

const Template = ({ children }) => {
    const { height, width } = useWindowDimensions();

    return (
        <Container
            style={
                width > 414
                    ? { height: "calc(100vh - 80px)" }
                    : { paddingBottom: "90px" }
            }
        >
            <Wrapper
                style={{
                    maxHeight: "1400px",
                    padding: "0",
                    margin: "0",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <Left>
                    <Image src="/images/auth.png" />
                </Left>
                <Right>
                    <Content>{children}</Content>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Template;
