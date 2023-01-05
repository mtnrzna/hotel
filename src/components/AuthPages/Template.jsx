import React from "react";
import styled from "styled-components";
import Container from "../Container";
import Wrapper from "../Wrapper";

const Left = styled.div`
    width: 50%;
    height: 70vh;
    overflow: hidden;
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
`;

const Content = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Template = ({ children }) => {
    return (
        <Container style={{ height: "calc(100vh - 80px)" }}>
            <Wrapper
                style={{
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
