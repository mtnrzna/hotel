import {
    GET_CHOSEN_RESV_REQUEST,
    GET_CHOSEN_RESV_SUCCESS,
    GET_CHOSEN_RESV_FAIL
    
} from "../../constants/admin/reservesListConstants";
import { axiosInstance } from "../../interceptor/interceptorAdmin";

// Get All roomList 
export const reservesListAction = () => async (dispatch) => {
    try {
        dispatch({ type: GET_CHOSEN_RESV_REQUEST });

        const  data  = await axiosInstance.get("reservations");
        console.log(data.data.reservations.data);
        dispatch({
            type: GET_CHOSEN_RESV_SUCCESS,
            payload: data.data.reservations.data,
        });
    } catch (error) {
        dispatch({
            type: GET_CHOSEN_RESV_FAIL,
            payload: error.response.data.message,
        });
    }
};
