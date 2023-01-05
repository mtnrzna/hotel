import React from "react";
import styled from "styled-components";
import Slick from "react-slick";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShareIcon from "@mui/icons-material/Share";
import { news } from "../../../../data";
import LinkWrapper from "../../../LinkWrapper";

const Carousel = styled(Slick)`
    max-width: 80vw;
`;

const Cart = styled.div`
    padding: 5px;
    margin: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    box-shadow: 0px 5px 10px 0px #dddddd;
`;

const Top = styled.div``;

const Image = styled.img`
    max-width: 40vw;
    max-height: 40vh;
`;

const Bottom = styled.div`
    padding: 20px;
`;

const Title = styled.h3``;

const Desc = styled.div`
    direction: rtl;
    margin-bottom: 40px;
    font-size: 16px;
`;

const BottomBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const SeeMoreButton = styled.button`
    background-color: transparent;
    border: transparent;
    font-weight: 600;
    display: flex;
    align-items: center;
`;

const Slider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };
    return (
        <Carousel {...settings}>
            {news.map((n) => (
                <Cart key={n.id}>
                    <Top>
                        <Image src={n.image} />
                    </Top>
                    <Bottom>
                        <LinkWrapper to={`/news/${n.id}`}>
                            <Title>{n.title}</Title>
                        </LinkWrapper>
                        <Desc>{n.desc}</Desc>
                        <BottomBar>
                            <LinkWrapper to={`/news/${n.id}`}>
                                <SeeMoreButton>
                                    <ArrowBackIosIcon
                                        style={{ fontSize: "14px" }}
                                    />
                                    ادامه مطلب
                                </SeeMoreButton>
                            </LinkWrapper>
                            <ShareIcon style={{ fontSize: "18px" }} />
                        </BottomBar>
                    </Bottom>
                </Cart>
            ))}
        </Carousel>
    );
};

export default Slider;
