import {
    NEW_CONTACTUS_FAIL,
    NEW_CONTACTUS_REQUEST,
    NEW_CONTACTUS_SUCCESS,
} from "../constants/contactUsConstants";
import { axiosInstance } from "../interceptor/interceptor";

// New ContactUs
export const addNewContactUs = (contactUsData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_CONTACTUS_REQUEST });
        const { data } = await axiosInstance.post("/contactUs", contactUsData, {
            params: { ...contactUsData },
        });
        dispatch({
            type: NEW_CONTACTUS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: NEW_CONTACTUS_FAIL,
            payload: error.response.data.message,
        });
    }
};
