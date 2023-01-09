import {
    NEW_CONTACTUS_FAIL,
    NEW_CONTACTUS_REQUEST,
    NEW_CONTACTUS_SUCCESS,
} from "../../constants/client/contactUsConstants";

// New ContactUS Reducer
export const newContactUsReducer = (
    state = { contactUs: {} },
    { type, payload }
) => {
    switch (type) {
        case NEW_CONTACTUS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case NEW_CONTACTUS_SUCCESS:
            return {
                loading: false,
                success: payload.success,
                contactUS: payload.contactUS,
            };
        case NEW_CONTACTUS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };

        default:
            return state;
    }
};
