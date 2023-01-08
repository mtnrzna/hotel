import React from "react";
import styled from "styled-components";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TemplateButton from "../../UI/TemplateButton";
import HomeSectionContainer from "../HomeSectionContainer";
import HomeSectionWrapper from "../HomeSectionWrapper";
import { mobile } from "../../../responsive";

const Top = styled.h2`
    margin-bottom: 40px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Left = styled.div`
    flex: 5;
    ${mobile({
        display: "none",
    })}
`;

const Map = styled.img`
    max-width: 100%;
    max-height: 100%;
`;

const Right = styled.div`
    align-self: stretch;
    min-height: 100%;
    flex: 7;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const WrapperRight = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    direction: rtl;
    ${mobile({
        display: "none",
    })}
`;

const InfoSection = styled.div`
    height: 5%;
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Name = styled.input`
    flex: 1;
    margin-left: 20px;
    ${mobile({
        width: "100%",
        padding: "12px 10px",
        marginLeft: "0",
        marginBottom: "20px",
        fontSize: "16px",
        boxSizing: "border-box",
    })}
`;

const Email = styled.input`
    flex: 1;
    ${mobile({
        width: "100%",
        padding: "12px 10px",
        marginBottom: "20px",
        fontSize: "16px",
        boxSizing: "border-box",
    })}
`;

const Message = styled.textarea`
    width: 100%;
    height: 60%;
    margin-bottom: 20px;
    box-sizing: border-box;
    resize: none;
    ${mobile({
        width: "100%",
        height: "150px",
        padding: "10px",
        marginBottom: "60px",
        fontSize: "16px",
        boxSizing: "border-box",
    })}
`;

const Submit = styled(TemplateButton)`
    width: 30%;
    height: 5%;
    margin-bottom: 20px;
    ${mobile({
        width: "100%",
        height: "50px",
    })}
`;

const Contacts = styled.div`
    height: 5%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mobile({
        display: "none",
    })}
`;

const PhoneContact = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
    ${mobile({
        display: "none",
    })}
`;

const EmailContact = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
`;

const Circle = styled.div`
    width: 40px;
    height: 40px;
    margin-left: 20px;
    border-radius: 50px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MobileInputSection = styled.div`
    width: 95vw;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    direction: rtl;
    ${mobile({
        display: "flex",
    })};
`;

const ContactUs = () => {
    return (
        <HomeSectionContainer>
            <HomeSectionWrapper>
                <Top>تماس با ما</Top>
                <Bottom>
                    <Left>
                        <Map src="/images/map.png" />
                    </Left>
                    <Right>
                        <WrapperRight>
                            <InfoSection>
                                <Name placeholder="نام و نام خانوادگی" />
                                <Email placeholder="ایمیل" />
                            </InfoSection>
                            <Message placeholder="پیام خود را در اینجا بنویسید" />
                            <Submit>ارسال پیام</Submit>
                            <Contacts>
                                <EmailContact>
                                    <Circle>
                                        <PhoneOutlinedIcon
                                            style={{ color: "white" }}
                                        />
                                    </Circle>
                                    091123456789
                                </EmailContact>
                                <PhoneContact>
                                    <Circle>
                                        <MailOutlineIcon
                                            style={{ color: "white" }}
                                        />
                                    </Circle>
                                    abcdef@gmail.com
                                </PhoneContact>
                            </Contacts>
                        </WrapperRight>
                    </Right>
                </Bottom>

                <MobileInputSection>
                    <Name placeholder="نام و نام خانوادگی" />
                    <Email placeholder="ایمیل" />
                    <Message placeholder="پیام خود را در اینجا بنویسید" />
                    <Submit>ارسال پیام</Submit>
                </MobileInputSection>
            </HomeSectionWrapper>
        </HomeSectionContainer>
    );
};

export default ContactUs;
