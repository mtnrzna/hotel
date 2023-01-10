import {
    GET_CHOSEN_NEWS_REQUEST,
    GET_CHOSEN_NEWS_SUCCESS,
    GET_CHOSEN_NEWS_FAIL
} from "../../constants/admin/newsListConstants";
import { axiosInstance } from "../../interceptor/interceptorAdmin";

// Get All roomList 
export const newsListAction = () => async (dispatch) => {
    try {
        dispatch({ type: GET_CHOSEN_NEWS_REQUEST });

        const  data  = await axiosInstance.get("posts");
        // console.log(data?.data?.posts);
        dispatch({
            type: GET_CHOSEN_NEWS_SUCCESS,
            payload: data?.data?.posts.data,
        });
    } catch (error) {
        dispatch({
            type: GET_CHOSEN_NEWS_FAIL,
            payload: error.response.data.message,
        });
    }
};
