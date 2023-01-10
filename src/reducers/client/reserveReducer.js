import {
    NEW_RESERVE_FAIL,
    NEW_RESERVE_REQUEST,
    NEW_RESERVE_SUCCESS,
} from "../../constants/client/reserveConstants";

// New Reserve Reducer
export const newReserveReducer = (
    state = { reserve: {} },
    { type, payload }
) => {
    switch (type) {
        case NEW_RESERVE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case NEW_RESERVE_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                reserve: payload.reserve,
            };
        case NEW_RESERVE_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };

        default:
            return state;
    }
};
