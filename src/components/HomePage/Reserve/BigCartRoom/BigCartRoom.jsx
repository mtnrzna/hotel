import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { bigRoom } from "../.././../../data";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LikesButton from "../../../UI/LikesButton";
import CapacityButton from "../../../UI/CapacityButton";
import LinkWrapper from "../../../LinkWrapper";
import truncateText from "../../../../utils/truncateText";
import { mobile } from "../../../../responsive";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { incrementRoomLike } from "../../../../actions/client/roomAction";

const Container = styled.div`
    margin: 0 10px 10px 0;
    flex: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 3px;
    box-shadow: 0px 5px 10px 0px #dddddd;
    box-sizing: border-box;
    ${mobile({
        display: "none",
    })}
`;

const Top = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Bottom = styled.div`
    padding: 10px 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
`;

const Title = styled.h3`
    margin: 0 0 10px 0;
`;

const Desc = styled.div`
    direction: rtl;
    margin-bottom: 50px;
`;

const BottomBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const ReserveButton = styled.button`
    background-color: transparent;
    border: transparent;
    font-weight: 600;
    display: flex;
    align-items: center;
`;

const IconsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BigCartRoom = () => {
    const { chosenRooms } = useSelector((state) => state.chosenRooms);
    const chosenRoom = chosenRooms ? chosenRooms[3] : null;

    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.incrementRoomLike);
    const [liked, setLiked] = useState(false);
    const [allLikes, setAllLikes] = useState(chosenRoom?.like_count);

    const handleLikeIncrement = async () => {
        if (!liked) {
            setLiked(!liked);
            await dispatch(incrementRoomLike(chosenRoom.id));
            setAllLikes(allLikes + 1);
        }
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
    }, [dispatch, loading, error]);
    return (
        <Container>
            <Top>
                <Image src={chosenRoom?.defaultImage} />
            </Top>
            <Bottom>
                <LinkWrapper to={`/reserve/${chosenRoom?.id}`}>
                    <Title>{truncateText(chosenRoom?.title, 50)}</Title>
                </LinkWrapper>
                <Desc>{truncateText(chosenRoom?.description, 100)}</Desc>
                <BottomBar>
                    <LinkWrapper to={`/reserve/${chosenRoom?.id}`}>
                        <ReserveButton>
                            <ArrowBackIosIcon style={{ fontSize: "14px" }} />
                            رزرو اتاق
                        </ReserveButton>
                    </LinkWrapper>
                    <IconsWrapper>
                        <LikesButton
                            liked={liked}
                            likeNumber={allLikes}
                            onClick={() => handleLikeIncrement(chosenRoom)}
                        />
                        <CapacityButton capacityNumber={chosenRoom?.capacity} />
                    </IconsWrapper>
                </BottomBar>
            </Bottom>
        </Container>
    );
};

export default BigCartRoom;
