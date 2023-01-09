import {
    LOAD_ADMIN_FAIL,
    LOAD_ADMIN_REQUEST,
    LOAD_ADMIN_SUCCESS,
    LOGIN_ADMIN_FAIL,
    LOGIN_ADMIN_REQUEST,
    LOGIN_ADMIN_SUCCESS,
    LOGOUT_ADMIN_FAIL,
    LOGOUT_ADMIN_SUCCESS,
    REGISTER_ADMIN_FAIL,
    REGISTER_ADMIN_REQUEST,
    REGISTER_ADMIN_SUCCESS,
} from "../../constants/admin/adminConstants";

const token = localStorage.getItem("adminToken");
export const adminReducer = (
    state = { isAdmin: token ? true : false },
    { type, payload }
) => {
    switch (type) {
        case LOGIN_ADMIN_REQUEST:
        case REGISTER_ADMIN_REQUEST:
        case LOAD_ADMIN_REQUEST:
            return {
                loading: true,
                isAdmin: false,
            };
        case REGISTER_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAdmin: false,
                admin: payload,
            };
        case LOGIN_ADMIN_SUCCESS:
        case LOAD_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAdmin: true,
                admin: payload,
            };
        case LOGOUT_ADMIN_SUCCESS:
            return {
                loading: false,
                ADMIN: null,
                isAdmin: false,
            };
        case LOGIN_ADMIN_FAIL:
        case REGISTER_ADMIN_FAIL:
            return {
                ...state,
                loading: false,
                isAdmin: false,
                admin: null,
                error: payload,
            };
        case LOAD_ADMIN_FAIL:
            return {
                loading: false,
                isAdmin: false,
                admin: null,
                error: payload,
            };
        case LOGOUT_ADMIN_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
};
