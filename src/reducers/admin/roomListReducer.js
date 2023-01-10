import {
    GET_CHOSEN_ROOMS_REQUEST,
    GET_CHOSEN_ROOMS_SUCCESS,
    GET_CHOSEN_ROOMS_FAIL
} from "../../constants/admin/roomListConstants";

export const roomListReducer = (state = { roomList: [] }, { type, payload }) => {
    switch (type) {
        case GET_CHOSEN_ROOMS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_CHOSEN_ROOMS_SUCCESS:
            return {
                loading: false,
                ROOMS: payload,
            };
        case GET_CHOSEN_ROOMS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
};
