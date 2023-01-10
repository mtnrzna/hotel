import {
    GET_CHOSEN_CONTACTS_REQUEST,
    GET_CHOSEN_CONTACTS_SUCCESS,
    GET_CHOSEN_CONTACTS_FAIL
} from "../../constants/admin/contactsListConstants";

export const contactsListReducer = (state = { contactsList: [] }, { type, payload }) => {
    switch (type) {
        case GET_CHOSEN_CONTACTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_CHOSEN_CONTACTS_SUCCESS:
            return {
                loading: false,
                contactsList: payload,
            };
        case GET_CHOSEN_CONTACTS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
};
