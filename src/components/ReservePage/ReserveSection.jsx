import React from "react";
import styled from "styled-components";
import Container from "../Container";
import Wrapper from "../Wrapper";
import { useLocation } from "react-router-dom";
import { long_news } from "../../data";
import { room } from "../../data";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import TemplateButton from "../UI/TemplateButton";

const Top = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TopLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 400px;
    object-fit: cover;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const IconsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const IconContainer = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Circle = styled.div`
    width: 60px;
    height: 60px;
    background-color: black;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const IconTitle = styled.h3``;

const TopRight = styled.div`
    margin-left: 50px;
    flex: 1;
    direction: rtl;
`;

const RoomTitle = styled.h3``;

const RoomDesc = styled.div``;

const CapacitySection = styled.div`
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

const CapacityTitle = styled.div`
    font-weight: bold;
`;

const Capacity = styled.div``;

const FacilitiesTitle = styled.h4`
    margin-bottom: 10px;
`;

const FacilitiesContainer = styled.ul`
    margin: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
`;

const FacilitiesItem = styled.li`
    margin-left: 30px;
`;

const Center = styled.div`
    direction: rtl;
`;

const TermsTitle = styled.h4`
    margin-bottom: 10px;
`;

const TermsContainer = styled.ul`
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
`;

const TermItem = styled.li``;

const Bottom = styled.div`
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BottomLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const BigImageContainer = styled.div`
    max-height: 400px;
    overflow: hidden;
    object-fit: cover;
`;

const SmallImagesContainer = styled.div`
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SmallImageContainer = styled.div`
    margin: 10px;
    height: 80%;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    box-sizing: border-box;
`;

const BottomRight = styled.div`
    flex: 1;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    direction: rtl;
`;

const DateSection = styled.div`
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
`;

const Label = styled.label`
    margin-bottom: 30px;
    font-weight: bold;
`;

const DateInput = styled.input`
    padding: 2px;
    font-weight: bold;
`;

const NumbersSection = styled.div`
    margin-bottom: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const NumberSection = styled.div`
    margin-left: 45px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const NumberInput = styled.input``;

const ReserveButton = styled(TemplateButton)`
    height: 35px;
    width: 150px;
`;

const iconClasses = { color: "white", fontSize: "35px" };

const icons = [
    {
        icon: <AutoGraphIcon style={iconClasses} />,
        title: "آنالیز دقیق",
    },
    {
        icon: <FactCheckIcon style={iconClasses} />,
        title: "تکونولوژی روز",
    },
    {
        icon: <PhoneInTalkIcon style={iconClasses} />,
        title: "پشتیبانی از شما",
    },
    {
        icon: <LocalOfferIcon style={iconClasses} />,
        title: "قیمت‌ها",
    },
];

const ReserveSection = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    return (
        <Container>
            <Wrapper style={{ alignItems: "stretch" }}>
                <Top>
                    <TopLeft>
                        <ImageContainer>
                            <Image src={long_news.image} />
                        </ImageContainer>
                        <IconsContainer>
                            {icons.map((i) => (
                                <IconContainer key={i.icon}>
                                    <Circle>{i.icon}</Circle>
                                    <IconTitle>{i.title}</IconTitle>
                                </IconContainer>
                            ))}
                        </IconsContainer>
                    </TopLeft>
                    <TopRight>
                        <RoomTitle>{room.title}</RoomTitle>
                        <RoomDesc>{room.desc}</RoomDesc>
                        <CapacitySection>
                            <CapacityTitle>ظرفیت:</CapacityTitle>
                            <Capacity>{room.capacity}</Capacity>
                        </CapacitySection>
                        <FacilitiesTitle>
                            امکانات جانبی هتل شامل:
                        </FacilitiesTitle>
                        <FacilitiesContainer>
                            {room.facilities.map((f) => (
                                <FacilitiesItem key={f}>{f}</FacilitiesItem>
                            ))}
                        </FacilitiesContainer>
                    </TopRight>
                </Top>
                <Center>
                    <TermsTitle>قوانین و مقررات:</TermsTitle>
                    <TermsContainer>
                        <TermItem>
                            به همراه داشتن شناسنامه و کارت ملی کلیه میهمانان
                            الزامی است.
                        </TermItem>
                        <TermItem>
                            اقامت یک کودک زیر 5 سال در هر اتاق رایگان می‌باشد و
                            .بالای 5 سال کامل محاسبه می‌گردند
                        </TermItem>
                        <TermItem>
                            زمان تحویل اتاق بعد از ساعت 15:00 و ساعت تخلیه اتاق
                            ساعت 12:00 ظهر می‌باشد.( ساعت ورود به هتل ملاک
                            محاسبه نمی‌گردد.)
                        </TermItem>
                    </TermsContainer>
                </Center>
                <Bottom>
                    <BottomLeft>
                        <BigImageContainer>
                            <Image src="/images/room3.png" />
                        </BigImageContainer>
                        <SmallImagesContainer>
                            <SmallImageContainer>
                                <Image src="/images/room2.png" />
                            </SmallImageContainer>
                            <SmallImageContainer>
                                <Image src="/images/room4.png" />
                            </SmallImageContainer>
                            <SmallImageContainer>
                                <Image src="/images/room6.png" />
                            </SmallImageContainer>
                        </SmallImagesContainer>
                    </BottomLeft>
                    <BottomRight>
                        <DateSection>
                            <Label htmlFor="arrival-date">تاریخ ورود:</Label>
                            <DateInput
                                name="arrival-date"
                                type="date"
                                placeholder="2023-01-20"
                                min="2012-01-01"
                                max="2100-12-31"
                            />
                        </DateSection>
                        <DateSection>
                            <Label htmlFor="departure-date">تاریخ خروج:</Label>
                            <DateInput
                                name="departure-date"
                                type="date"
                                placeholder="2023-01-20"
                                min="2012-01-01"
                                max="2100-12-31"
                            />
                        </DateSection>
                        <NumbersSection>
                            <NumberSection>
                                <Label htmlFor="children-number">کودک:</Label>
                                <NumberInput
                                    name="children-number"
                                    type="number"
                                    min="0"
                                    max="200"
                                />
                            </NumberSection>
                            <NumberSection>
                                <Label htmlFor="adults-number">بزرگسال:</Label>
                                <NumberInput
                                    name="adults-number"
                                    type="number"
                                    min="1"
                                    max="200"
                                />
                            </NumberSection>
                        </NumbersSection>
                        <ReserveButton>رزرو</ReserveButton>
                    </BottomRight>
                </Bottom>
            </Wrapper>
        </Container>
    );
};

export default ReserveSection;
