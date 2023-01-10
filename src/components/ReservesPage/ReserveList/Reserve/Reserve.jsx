import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LinkWrapper from "../../../LinkWrapper";
import LikesButton from "../../../UI/LikesButton";
import CapacityButton from "../../../UI/CapacityButton";
import TemplateButton from "../../../UI/TemplateButton";
import { mobile } from "../../../../responsive";
import { rooms } from "../../../../data";
import { useDispatch, useSelector } from "react-redux";
import { incrementRoomLike } from "../../../../actions/client/roomAction";
import { toast } from "react-toastify";
import truncateText from "../../../../utils/truncateText";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

const Container = styled.div`
    padding: 30px 0;
    height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mobile({
        height: "100%",
        padding: "0 30px 30px 30px",
        marginBottom: "30px",
        flexDirection: "column",
        boxShadow: "0px 5px 10px 0px #dddddd",
    })}
`;

const Left = styled.div`
    height: 100%;
    flex: 5;
    overflow: hidden;
    ${mobile({
        width: "100%",
    })}
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    ${mobile({
        height: "300px",
        width: "100%",
    })}
`;

const Right = styled.div`
    height: 100%;
    margin-left: 60px;
    flex: 7;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    ${mobile({
        marginLeft: "0",
        padding: "0 20px",
    })}
`;

const Title = styled.h4``;

const Desc = styled.div`
    margin-bottom: 40px;
    text-align: right;
`;

const BottomBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
`;

const IconsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ReserveButton = styled(TemplateButton)`
    height: 35px;
    width: 150px;
    ${mobile({
        height: "40px",
    })}
`;

const Reserve = ({ room }) => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.incrementRoomLike);
    const [liked, setLiked] = useState(false);
    const [allLikes, setAllLikes] = useState(room?.like_count);

    const handleLikeIncrement = async () => {
        if (!liked) {
            setLiked(!liked);
            await dispatch(incrementRoomLike(room.id));
            setAllLikes(allLikes + 1);
        }
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
    }, [dispatch, loading, error]);

    const { height, width } = useWindowDimensions();

    return (
        <Container>
            <Left>
                <Image src={room.image} />
            </Left>
            <Right>
                <LinkWrapper to={`/reserve/${room.id}`}>
                    <Title>{room.title}</Title>
                </LinkWrapper>
                <Desc>
                    {truncateText(room.description, width > 700 ? 360 : 100)}
                </Desc>
                <BottomBar>
                    <IconsWrapper>
                        <LikesButton
                            liked={liked}
                            likeNumber={allLikes}
                            onClick={() => handleLikeIncrement(room)}
                        />
                        <CapacityButton capacityNumber={room.capacity} />
                    </IconsWrapper>
                    <LinkWrapper to={`/reserve/${room.id}`}>
                        <ReserveButton>رزرو</ReserveButton>
                    </LinkWrapper>
                </BottomBar>
            </Right>
        </Container>
    );
};

export default Reserve;
