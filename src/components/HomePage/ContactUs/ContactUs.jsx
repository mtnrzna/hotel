import React from "react";
import styled from "styled-components";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Container = styled.div`
    height: calc(100vh + 150px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

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
`;

const Email = styled.input`
    flex: 1;
`;

const Message = styled.textarea`
    width: 100%;
    height: 60%;
    margin-bottom: 20px;
    box-sizing: border-box;
    resize: none;
`;

const Submit = styled.button`
    width: 30%;
    height: 5%;
    margin-bottom: 20px;
    background-color: #2f80ed;
    border: transparent;
    border-radius: 3px;
    color: white;
`;

const Contacts = styled.div`
    height: 5%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PhoneContact = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
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
const ContactUs = () => {
    return (
        <Container>
            <Wrapper>
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
            </Wrapper>
        </Container>
    );
};

export default ContactUs;
