import {
    GET_CHOSEN_ROOMS_REQUEST,
    GET_CHOSEN_ROOMS_SUCCESS,
    GET_CHOSEN_ROOMS_FAIL,
} from "../../constants/client/roomConstants";
import { axiosInstance } from "../../interceptor/interceptor";

// Get Rooms
export const getChosenRooms = () => async (dispatch) => {
    try {
        dispatch({ type: GET_CHOSEN_ROOMS_REQUEST });

        const { res } = await axiosInstance.post("/room4s", {
            params: { page: 1 },
        });

        const rooms = res.rooms.data;
        const chosenRooms = rooms;

        dispatch({
            type: GET_CHOSEN_ROOMS_SUCCESS,
            payload: chosenRooms,
        });
    } catch (error) {
        dispatch({
            type: GET_CHOSEN_ROOMS_FAIL,
            payload: error.response.data.message,
        });
    }
};
