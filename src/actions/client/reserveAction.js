import {
    NEW_RESERVE_FAIL,
    NEW_RESERVE_REQUEST,
    NEW_RESERVE_SUCCESS,
} from "../../constants/client/reserveConstants";
import { axiosInstance } from "../../interceptor/interceptor";

// New Reserve
export const addNewReserve = (roomsId, reserve) => async (dispatch) => {
    try {
        dispatch({ type: NEW_RESERVE_REQUEST });
        const { data } = await axiosInstance.post(
            `/rooms/${roomsId}`,
            reserve,
            {
                params: { ...roomsId },
            }
        );
        dispatch({
            type: NEW_RESERVE_SUCCESS,
        });
    } catch (error) {
        dispatch({
            type: NEW_RESERVE_FAIL,
            payload: error.response.data.message,
        });
    }
};
