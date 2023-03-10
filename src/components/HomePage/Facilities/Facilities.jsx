import React from "react";
import styled from "styled-components";
import HomeSectionContainer from "../HomeSectionContainer";
import HomeSectionWrapper from "../HomeSectionWrapper";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import WifiIcon from "@mui/icons-material/Wifi";
import FlatwareIcon from "@mui/icons-material/Flatware";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import TourIcon from "@mui/icons-material/Tour";
import { mobile } from "../../../responsive";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const Top = styled.h2`
    margin-bottom: 40px;
`;

const Bottom = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const Cart = styled.div`
    width: 28%;
    padding: 20px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0px 5px 10px 0px #dddddd;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${mobile({
        width: "60vw",
    })}
`;

const IconContainer = styled.div`
    font-size: 60px;
`;

const Title = styled.h3`
    ${mobile({
        fontSize: "16px",
        fontWeight: "bold",
    })}
`;

const Desc = styled.div`
    text-align: center;
    ${mobile({
        fontSize: "14px",
    })}
`;

const facilities = [
    {
        icon: <FmdGoodIcon style={{ fontSize: "inherit" }} />,
        title: "تایتل شماره پیش فرض",
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ",
    },
    {
        icon: <PhoneInTalkIcon style={{ fontSize: "inherit" }} />,
        title: "تایتل شماره پیش فرض",
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ",
    },
    {
        icon: <WifiIcon style={{ fontSize: "inherit" }} />,
        title: "تایتل شماره پیش فرض",
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ",
    },
    {
        icon: <FlatwareIcon style={{ fontSize: "inherit" }} />,
        title: "تایتل شماره پیش فرض",
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ",
    },
    {
        icon: <FamilyRestroomIcon style={{ fontSize: "inherit" }} />,
        title: "تایتل شماره پیش فرض",
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ",
    },
    {
        icon: <TourIcon style={{ fontSize: "inherit" }} />,
        title: "تایتل شماره پیش فرض",
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ",
    },
];
const Facilities = () => {
    const { height, width } = useWindowDimensions();
    return (
        <HomeSectionContainer>
            <HomeSectionWrapper>
                <Top>امکانات هتل ما</Top>
                <Bottom>
                    {facilities.slice(0, width > 415 ? 6 : 3).map((f) => (
                        <Cart key={f.icon}>
                            <IconContainer>{f.icon}</IconContainer>
                            <Title>{f.title}</Title>
                            <Desc>{f.desc}</Desc>
                        </Cart>
                    ))}
                </Bottom>
            </HomeSectionWrapper>
        </HomeSectionContainer>
    );
};

export default Facilities;
