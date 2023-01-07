import React from "react";
import styled from "styled-components";
import Container from "../components/Container";
import LinkWrapper from "../components/LinkWrapper";
import Wrapper from "../components/Wrapper";
import TemplateButton from "../components/UI/TemplateButton";
const Top = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`;

const Image = styled.img`
    max-height: 100%;
    max-width: 100%;
    object-fit: fit;
`;

const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
`;

const Title = styled.h3``;

const RedirectButtom = styled(TemplateButton)`
    height: 40px;
    width: 100%;
`;

const NotFoundSection = () => {
    return (
        <Container
            style={{
                height: "calc(100vh - 80px)",
                backgroundColor: "#FBFBFB",
            }}
        >
            <Wrapper
                style={{
                    height: "100%",
                    maxHeight: "1400px",
                    backgroundColor: "#FBFBFB",
                    boxShadow: "none",
                }}
            >
                <Top>
                    <Image src="/images/404.png" />
                </Top>
                <Bottom>
                    <Title>صفحه مورد نظر شما پیدا نشد</Title>
                    <LinkWrapper to="/">
                        <RedirectButtom>بازگشت</RedirectButtom>
                    </LinkWrapper>
                </Bottom>
            </Wrapper>
        </Container>
    );
};

export default NotFoundSection;
