import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: calc(100vh - 80px);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f6f6f6;
`;

const Wrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    background: white;
    box-shadow: 0px 5px 10px 0px #dddddd;
    border-radius: 5px;
    overflow: hidden;
`;

const Left = styled.div`
    width: 50%;
    height: 600px;
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
        <Container>
            <Wrapper>
                <Left>
                    <Image src="images/auth.png" />
                </Left>
                <Right>
                    <Content>{children}</Content>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Template;
