import {
    LOGIN_USER_FAIL,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    REGISTER_USER_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
} from "../../constants/client/userConstants";

import { axiosInstance } from "../../interceptor/interceptor";

// SignUp User
export const registerUser = (userData) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_USER_REQUEST });

        const { data } = await axiosInstance.post("/register", userData, {
            params: { ...userData, deviceName: "deviceName" },
        });

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data.user,
        });
    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Login User
export const loginUser = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_USER_REQUEST });

        const { data } = await axiosInstance.post(
            "/login",
            {
                email,
                password,
            },
            {
                params: {
                    email: email,
                    password: password,
                    deviceName: "deviceName",
                },
            }
        );

        localStorage.setItem("token", data.token);

        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: data.user,
        });
    } catch (error) {
        dispatch({
            type: LOGIN_USER_FAIL,
            payload: error.response.data.message,
        });
    }
};
