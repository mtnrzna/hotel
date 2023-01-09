import {
    ALL_GALLERY_PICS_FAIL,
    ALL_GALLERY_PICS_REQUEST,
    ALL_GALLERY_PICS_SUCCESS,
} from "../../constants/client/galleryConstants";

export const galleryReducer = (state = { gallery: [] }, { type, payload }) => {
    switch (type) {
        case ALL_GALLERY_PICS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ALL_GALLERY_PICS_SUCCESS:
            return {
                loading: false,
                ROOMS: payload,
            };
        case ALL_GALLERY_PICS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
};
