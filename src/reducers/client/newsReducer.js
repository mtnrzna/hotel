import {
    GET_CHOSEN_NEWS_REQUEST,
    GET_CHOSEN_NEWS_SUCCESS,
    GET_CHOSEN_NEWS_FAIL,
} from "../../constants/client/newsConstants";

export const chosenNewsReducer = (
    state = { chosenNews: [] },
    { type, payload }
) => {
    switch (type) {
        case GET_CHOSEN_NEWS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_CHOSEN_NEWS_SUCCESS:
            return {
                loading: false,
                chosenNews: payload,
            };
        case GET_CHOSEN_NEWS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
};
