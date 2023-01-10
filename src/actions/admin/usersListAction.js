import {
    GET_CHOSEN_USERS_REQUEST,
    GET_CHOSEN_USERS_SUCCESS,
    GET_CHOSEN_USERS_FAIL
} from "../../constants/admin/usersListConstants";
import { axiosInstance } from "../../interceptor/interceptorAdmin";

// Get All roomList 
export const usersListAction = () => async (dispatch) => {
    try {
        dispatch({ type: GET_CHOSEN_USERS_REQUEST });

        const  data  = await axiosInstance.get("users");
        // console.log(data.data.users.data);
        dispatch({
            type: GET_CHOSEN_USERS_SUCCESS,
            payload: data.data.users.data,
        });
    } catch (error) {
        dispatch({
            type: GET_CHOSEN_USERS_FAIL,
            payload: error.response.data.message,
        });
    }
};
