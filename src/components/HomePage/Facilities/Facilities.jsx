import React from "react";
import styled from "styled-components";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import WifiIcon from "@mui/icons-material/Wifi";
import FlatwareIcon from "@mui/icons-material/Flatware";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import TourIcon from "@mui/icons-material/Tour";

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
`;

const IconContainer = styled.div`
    font-size: 60px;
`;

const Title = styled.h3``;

const Desc = styled.div`
    text-align: center;
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
    return (
        <Container>
            <Wrapper>
                <Top>امکانات هتل ما</Top>
                <Bottom>
                    {facilities.map((f) => (
                        <Cart key={f.icon}>
                            <IconContainer>{f.icon}</IconContainer>
                            <Title>{f.title}</Title>
                            <Desc>{f.desc}</Desc>
                        </Cart>
                    ))}
                </Bottom>
            </Wrapper>
        </Container>
    );
};

export default Facilities;
