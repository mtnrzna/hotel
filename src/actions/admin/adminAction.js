import {
    LOGIN_ADMIN_FAIL,
    LOGIN_ADMIN_REQUEST,
    LOGIN_ADMIN_SUCCESS,
} from "../../constants/admin/adminConstants";

import { axiosInstance } from "../../interceptor/interceptor";

// Login Admin
export const loginAdmin = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_ADMIN_REQUEST });

        const { data } = await axiosInstance.post(
            "/admin/login",
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

        localStorage.setItem("tokenAdmin", data.token);

        dispatch({
            type: LOGIN_ADMIN_SUCCESS,
            payload: data.admin,
        });
    } catch (error) {
        dispatch({
            type: LOGIN_ADMIN_FAIL,
            payload: error.response.data.message,
        });
    }
};
