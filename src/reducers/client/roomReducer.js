import {
    GET_CHOSEN_ROOMS_REQUEST,
    GET_CHOSEN_ROOMS_SUCCESS,
    GET_CHOSEN_ROOMS_FAIL,
} from "../../constants/client/roomConstants";

export const chosenRoomsReducer = (
    state = { chosenRooms: [] },
    { type, payload }
) => {
    switch (type) {
        case GET_CHOSEN_ROOMS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_CHOSEN_ROOMS_SUCCESS:
            return {
                loading: false,
                chosenRooms: payload,
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
