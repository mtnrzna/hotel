import {
    ALL_GALLERY_PICS_FAIL,
    ALL_GALLERY_PICS_REQUEST,
    ALL_GALLERY_PICS_SUCCESS,
} from "../../constants/client/galleryConstants";
import { axiosInstance } from "../../interceptor/interceptor";

// Get All Galley Pics
export const getGallery = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_GALLERY_PICS_REQUEST });

        const { data } = await axiosInstance.get("/gallery", {
            params: { page: 1 },
        });

        dispatch({
            type: ALL_GALLERY_PICS_SUCCESS,
            payload: data.gallery.data,
        });
    } catch (error) {
        dispatch({
            type: ALL_GALLERY_PICS_FAIL,
            payload: error.response.data.message,
        });
    }
};
