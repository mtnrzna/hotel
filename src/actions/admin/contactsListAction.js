import {
    GET_CHOSEN_CONTACTS_REQUEST,
    GET_CHOSEN_CONTACTS_SUCCESS,
    GET_CHOSEN_CONTACTS_FAIL
} from "../../constants/admin/contactsListConstants";
import { axiosInstance } from "../../interceptor/interceptorAdmin";

// Get All roomList 
export const contactsListAction = () => async (dispatch) => {
    try {
        dispatch({ type: GET_CHOSEN_CONTACTS_REQUEST });

        const  data  = await axiosInstance.get("contactUs");
        // console.log(data.data.contactUs.data);
        dispatch({
            type: GET_CHOSEN_CONTACTS_SUCCESS,
            payload: data.data.contactUs.data,
        });
    } catch (error) {
        dispatch({
            type: GET_CHOSEN_CONTACTS_FAIL,
            payload: error.response.data.message,
        });
    }
};
