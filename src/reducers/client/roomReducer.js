import {
    GET_CHOSEN_ROOMS_REQUEST,
    GET_CHOSEN_ROOMS_SUCCESS,
    GET_CHOSEN_ROOMS_FAIL,
    INCREMENT_ROOM_LIKE_REQUEST,
    INCREMENT_ROOM_LIKE_SUCCESS,
    INCREMENT_ROOM_LIKE_FAIL,
    GET_ROOMS_REQUEST,
    GET_ROOMS_SUCCESS,
    GET_ROOMS_FAIL,
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

export const incrementRoomLikeReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case INCREMENT_ROOM_LIKE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case INCREMENT_ROOM_LIKE_SUCCESS:
            return {
                loading: false,
            };
        case INCREMENT_ROOM_LIKE_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
};

export const roomsByPageReducer = (
    state = { rooms: [] },
    { type, payload }
) => {
    switch (type) {
        case GET_ROOMS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ROOMS_SUCCESS:
            return {
                loading: false,
                roomsAndPageNumber: payload,
            };
        case GET_ROOMS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
};
