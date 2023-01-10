import {
    GET_CHOSEN_RESV_REQUEST,
    GET_CHOSEN_RESV_SUCCESS,
    GET_CHOSEN_RESV_FAIL
} from "../../constants/admin/reservesListConstants";

export const reservesListReducer = (state = { reservesList: [] }, { type, payload }) => {
    switch (type) {
        case GET_CHOSEN_RESV_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_CHOSEN_RESV_SUCCESS:
            return {
                loading: false,
                reserves: payload,
            };
        case GET_CHOSEN_RESV_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
};
