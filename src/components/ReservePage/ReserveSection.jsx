import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Container from "../Container";
import Wrapper from "../Wrapper";
import { useLocation, useNavigate } from "react-router-dom";
import { long_news } from "../../data";
import { room } from "../../data";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import TemplateButton from "../UI/TemplateButton";
import { mobile } from "../../responsive";
import { useDispatch, useSelector } from "react-redux";
import { getRoomById, getRoomDetail } from "../../actions/client/roomAction";
import { toast } from "react-toastify";
import BackdropLoader from "../Layouts/BackdropLoader";
import { addNewReserve } from "../../actions/client/reserveAction";

const Top = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${mobile({
        flexDirection: "column",
    })}
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
    ${mobile({
        height: "300px",
        marginBottom: "20px",
    })}
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
    ${mobile({
        display: "none",
    })}
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
    ${mobile({
        padding: "0 20px",
        marginLeft: "0",
    })}
`;

const RoomTitle = styled.h3``;

const RoomDesc = styled.div``;

const CapacitySection = styled.div`
    margin-top: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
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
    ${mobile({
        padding: "0 20px",
    })}
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
    ${mobile({
        padding: "0 20px",
    })}
`;

const BottomLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${mobile({
        display: "none",
    })}
`;

const BigImageContainer = styled.div`
    height: 400px;
    width: 400px;
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
    height: 100px;
    width: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    box-sizing: border-box;
`;

const BottomRight = styled.form`
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
    ${mobile({
        width: "100%",
    })}
`;

const Label = styled.label`
    margin-bottom: 30px;
    font-weight: bold;
`;

const DateInput = styled.input`
    padding: 2px;
    font-weight: bold;
    ${mobile({
        border: "0px",
        textAlign: "center",
    })}
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

const ReserveButtonContainer = styled.div`
    ${mobile({
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
    })}
`;

const ReserveButton = styled(TemplateButton)`
    height: 35px;
    width: 150px;
    ${mobile({
        width: "80%",
        height: "40px",
    })}
`;

const iconClasses = { color: "white", fontSize: "35px" };

const icons = [
    {
        icon: <AutoGraphIcon style={iconClasses} />,
        title: "امکانات به‌روز",
    },
    {
        icon: <FactCheckIcon style={iconClasses} />,
        title: "لوکس",
    },
    {
        icon: <PhoneInTalkIcon style={iconClasses} />,
        title: "رزرو آنلاین",
    },
    {
        icon: <LocalOfferIcon style={iconClasses} />,
        title: "تضمین قیمت",
    },
];

const ReserveSection = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const dispatch = useDispatch();

    //dispatch(getRoomById(id));
    useEffect(() => {
        dispatch(getRoomById(id));
    }, [dispatch]);

    const { room, loading, error } = useSelector((state) => state.roomById);
    useEffect(() => {
        if (error) toast.error(error);
    }, [dispatch, loading, error]);

    const [otherImages, setOtherImages] = useState({});
    const [image0, setImage0] = useState({});
    const [image1, setImage1] = useState({});
    const [image2, setImage2] = useState({});
    const [image3, setImage3] = useState({});

    useEffect(() => {
        if (room) setOtherImages(room.otherImages);
    }, [room]);

    useEffect(() => {
        if (otherImages && otherImages.length >= 4) {
            setImage0(otherImages[0]);
            setImage1(otherImages[1]);
            setImage2(otherImages[2]);
            setImage3(otherImages[3]);
        }
    }, [otherImages]);

    const navigate = useNavigate();

    const {
        isAuthenticated,
        error: error2,
        registered,
    } = useSelector((state) => state.user);

    const [arrivalDate, setArrivalDate] = useState("");
    const [departureDate, setDepartureDate] = useState("");
    const [childrenNumber, setChildrenNumber] = useState("");
    const [adultsNumber, setAdultsNumber] = useState("");

    //const [avatar, setAvatar] = useState();
    //const [avatarPreview, setAvatarPreview] = useState();

    const handleReserve = (e) => {
        e.preventDefault();

        dispatch(
            addNewReserve(id, {
                from: arrivalDate,
                to: departureDate,
                adults: adultsNumber,
                infants: childrenNumber,
            })
        );
    };

    useEffect(() => {
        if (error2) {
            toast.error(error2);
        }
        if (isAuthenticated) {
        }
        if (registered) {
            setArrivalDate("");
            setDepartureDate("");
            setAdultsNumber("");
            setChildrenNumber("");
            toast.success("رزرو با موفقیت انجام شد.", {
                autoClose: 5000,
            });
        }
    }, [dispatch, error, error2, isAuthenticated, registered, navigate]);

    return (
        <Container>
            <Wrapper style={{ alignItems: "stretch" }}>
                {loading && <BackdropLoader />}

                <Top>
                    <TopLeft>
                        <ImageContainer>
                            <Image
                                src={room?.defaultImage?.replace(
                                    "/uploads/rooms/",
                                    ""
                                )}
                            />
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
                        <RoomTitle>{room?.title}</RoomTitle>
                        <RoomDesc>{room?.description}</RoomDesc>
                        <CapacitySection>
                            <CapacityTitle>ظرفیت:</CapacityTitle>
                            <Capacity>{room?.capacity}</Capacity>
                        </CapacitySection>
                        <FacilitiesTitle>
                            امکانات جانبی هتل شامل:
                        </FacilitiesTitle>
                        <FacilitiesContainer>
                            {room?.facilities?.map((f) => (
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
                            <Image
                                src={image0?.url?.replace(
                                    "/uploads/rooms/",
                                    ""
                                )}
                            />
                        </BigImageContainer>
                        <SmallImagesContainer>
                            <SmallImageContainer>
                                <Image
                                    src={image1?.url?.replace(
                                        "/uploads/rooms/",
                                        ""
                                    )}
                                />
                            </SmallImageContainer>
                            <SmallImageContainer>
                                <Image
                                    src={image2?.url?.replace(
                                        "/uploads/rooms/",
                                        ""
                                    )}
                                />
                            </SmallImageContainer>
                            <SmallImageContainer>
                                <Image
                                    src={image3?.url?.replace(
                                        "/uploads/rooms/",
                                        ""
                                    )}
                                />
                            </SmallImageContainer>
                        </SmallImagesContainer>
                    </BottomLeft>
                    <BottomRight onSubmit={handleReserve}>
                        <DateSection>
                            <Label htmlFor="arrival-date">تاریخ ورود:</Label>
                            <DateInput
                                name="arrivalDate"
                                value={arrivalDate}
                                type="date"
                                placeholder="2023-01-20"
                                min="2012-01-01"
                                max="2100-12-31"
                                onChange={(e) => setArrivalDate(e.target.value)}
                            />
                        </DateSection>
                        <DateSection>
                            <Label htmlFor="departure-date">تاریخ خروج:</Label>
                            <DateInput
                                name="departureDate"
                                value={departureDate}
                                type="date"
                                placeholder="2023-01-20"
                                min="2012-01-01"
                                max="2100-12-31"
                                onChange={(e) =>
                                    setDepartureDate(e.target.value)
                                }
                            />
                        </DateSection>
                        <NumbersSection>
                            <NumberSection>
                                <Label htmlFor="children-number">کودک:</Label>
                                <NumberInput
                                    name="childrenNumber"
                                    value={childrenNumber}
                                    type="number"
                                    min="0"
                                    max="200"
                                    onChange={(e) =>
                                        setChildrenNumber(e.target.value)
                                    }
                                />
                            </NumberSection>
                            <NumberSection>
                                <Label htmlFor="adults-number">بزرگسال:</Label>
                                <NumberInput
                                    name="adultsNumber"
                                    value={adultsNumber}
                                    type="number"
                                    min="1"
                                    max="200"
                                    onChange={(e) =>
                                        setAdultsNumber(e.target.value)
                                    }
                                />
                            </NumberSection>
                        </NumbersSection>
                        <ReserveButtonContainer>
                            <ReserveButton>رزرو</ReserveButton>
                        </ReserveButtonContainer>
                    </BottomRight>
                </Bottom>
            </Wrapper>
        </Container>
    );
};

export default ReserveSection;
