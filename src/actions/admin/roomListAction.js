import {
    GET_CHOSEN_ROOMS_REQUEST,
    GET_CHOSEN_ROOMS_SUCCESS,
    GET_CHOSEN_ROOMS_FAIL
} from "../../constants/admin/roomListConstants";
import { axiosInstance } from "../../interceptor/interceptorAdmin";

// Get All roomList 
export const roomListAction = () => async (dispatch) => {
    try {
        dispatch({ type: GET_CHOSEN_ROOMS_REQUEST });

        const  data  = await axiosInstance.get("rooms");
        dispatch({
            type: GET_CHOSEN_ROOMS_SUCCESS,
            payload: data.data.rooms.data,
        });
    } catch (error) {
        dispatch({
            type: GET_CHOSEN_ROOMS_FAIL,
            payload: error.response.data.message,
        });
    }
};
