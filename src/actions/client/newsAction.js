import {
    GET_CHOSEN_NEWS_REQUEST,
    GET_CHOSEN_NEWS_SUCCESS,
    GET_CHOSEN_NEWS_FAIL,
} from "../../constants/client/newsConstants";
import { axiosInstance } from "../../interceptor/interceptor";

// Get Chosen News for Home Page
export const getChosenNews = () => async (dispatch) => {
    try {
        dispatch({ type: GET_CHOSEN_NEWS_REQUEST });

        const { data } = await axiosInstance.get("/posts", {
            params: { page: 1 },
        });

        const chosenRooms = data.posts.data.slice(0, 8);

        dispatch({
            type: GET_CHOSEN_NEWS_SUCCESS,
            payload: chosenRooms,
        });
    } catch (error) {
        dispatch({
            type: GET_CHOSEN_NEWS_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get A News's Detail
export const getNewsDetail = (id) => async () => {
    try {
        const { data } = await axiosInstance.put(`/posts/${id}`);
        return data.posts;
    } catch (error) {
        console.log(error);
    }
};
