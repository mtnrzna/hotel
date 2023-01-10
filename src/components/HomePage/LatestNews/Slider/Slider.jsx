import React from "react";
import styled from "styled-components";
import Slick from "react-slick";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShareIcon from "@mui/icons-material/Share";
//import { news } from "../../../../data";
import LinkWrapper from "../../../LinkWrapper";
import truncateText from "../.././../../utils/truncateText";
import Arrow from "./Arrow/Arrow";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import { mobile } from "../../../../responsive";

const Carousel = styled(Slick)`
    max-width: 80vw;
    ${mobile({ maxWidth: "100vw" })}
`;

const Container = styled.div`
    max-height: 80vh;
    ${mobile({ width: "100vw" })}
`;

const Cart = styled.div`
    height: 100%;
    margin: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    box-shadow: 0px 5px 10px 0px #dddddd;
    box-sizing: border-box;
`;

const Top = styled.div`
    width: 100%;
    height: 35vh;
    overflow: hidden;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Bottom = styled.div`
    flex: 1;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h3`
    margin: 0 0 10px 0;
    direction: rtl;
    ${mobile({
        fontSize: "16px",
        fontWeight: "bold",
    })}
`;

const Desc = styled.div`
    direction: rtl;
    margin-bottom: 40px;
    ${mobile({
        fontSize: "14px",
    })}
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

const Slider = ({ news }) => {
    const { height, width } = useWindowDimensions();

    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: width > 414 ? 3 : 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <Arrow type="left" />,
        nextArrow: <Arrow type="right" />,
    };
    return (
        <Carousel
            {...settings}
            style={{ display: "flex", alignItems: "center" }}
        >
            {news.map((n) => (
                <Container key={n.id}>
                    <Cart>
                        <Top>
                            <Image src={n.image} />
                        </Top>
                        <Bottom>
                            <LinkWrapper to={`/news/${n.id}`}>
                                <Title>{truncateText(n.title, 80)}</Title>
                            </LinkWrapper>
                            <Desc>
                                {truncateText(
                                    n.description,
                                    width > 700 ? 120 : 90
                                )}
                            </Desc>
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
                </Container>
            ))}
        </Carousel>
    );
};

export default Slider;
