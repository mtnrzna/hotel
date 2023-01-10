import {
    GET_CHOSEN_USERS_REQUEST,
    GET_CHOSEN_USERS_SUCCESS,
    GET_CHOSEN_USERS_FAIL
} from "../../constants/admin/usersListConstants";

export const usersListReducer = (state = { usersList: [] }, { type, payload }) => {
    switch (type) {
        case GET_CHOSEN_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_CHOSEN_USERS_SUCCESS:
            return {
                loading: false,
                users: payload,
            };
        case GET_CHOSEN_USERS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
};
