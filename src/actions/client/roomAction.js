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
    GET_ROOM_BY_ID_REQUEST,
    GET_ROOM_BY_ID_SUCCESS,
    GET_ROOM_BY_ID_FAIL,
} from "../../constants/client/roomConstants";
import { axiosInstance } from "../../interceptor/interceptor";

// Get Chosen Rooms for Home Page
export const getChosenRooms = () => async (dispatch) => {
    try {
        dispatch({ type: GET_CHOSEN_ROOMS_REQUEST });

        const { data } = await axiosInstance.get("/rooms", {
            params: { page: 1 },
        });

        const chosenRooms = data.rooms.data.slice(0, 4);

        dispatch({
            type: GET_CHOSEN_ROOMS_SUCCESS,
            payload: chosenRooms,
        });
    } catch (error) {
        dispatch({
            type: GET_CHOSEN_ROOMS_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Increment Like of A Room
export const incrementRoomLike = (id) => async (dispatch) => {
    try {
        dispatch({ type: INCREMENT_ROOM_LIKE_REQUEST });

        const { data } = await axiosInstance.put(`/rooms/${id}`);

        dispatch({
            type: INCREMENT_ROOM_LIKE_SUCCESS,
        });
    } catch (error) {
        dispatch({
            type: INCREMENT_ROOM_LIKE_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get Rooms By Page Number
export const getRoomsByPage = (page) => async (dispatch) => {
    try {
        dispatch({ type: GET_ROOMS_REQUEST });

        const { data } = await axiosInstance.get("/rooms", {
            params: { page: page },
        });

        const roomsAndPageNumber = {
            rooms: data.rooms.data,
            totalPageNumber: data.rooms.total,
        };
        dispatch({
            type: GET_ROOMS_SUCCESS,
            payload: roomsAndPageNumber,
        });
    } catch (error) {
        dispatch({
            type: GET_ROOMS_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get A Room's Detail
export const getRoomById = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_ROOM_BY_ID_REQUEST });

        const { data } = await axiosInstance.get(`/rooms/${id}`);

        dispatch({
            type: GET_ROOM_BY_ID_SUCCESS,
            payload: data.room,
        });
    } catch (error) {
        dispatch({
            type: GET_ROOM_BY_ID_FAIL,
            payload: error.response.data.message,
        });
    }
};
