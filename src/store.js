import { createStore, combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/client/userReducer";
import { chosenRoomsReducer } from "./reducers/client/roomReducer";
import { galleryReducer } from "./reducers/client/galleryReducer";
import { newContactUsReducer } from "./reducers/client/contactUsReducer";
import { adminReducer } from "./reducers/admin/adminReducer";
import { roomListReducer } from "./reducers/admin/roomListReducer";
import { newsListReducer } from "./reducers/admin/newsListReducer";
import { usersListReducer } from "./reducers/admin/usersListReducer";
import { reservesListReducer } from "./reducers/admin/reservesListReducer";
import { contactsListReducer } from "./reducers/admin/contactsListReducer";

const reducer = combineReducers({
    user: userReducer,
    chosenRooms: chosenRoomsReducer,
    gallery: galleryReducer,
    newContactUs: newContactUsReducer,
    admin: adminReducer,
    roomList:roomListReducer,
    newsList:newsListReducer,
    usersList:usersListReducer,
    reservesList:reservesListReducer,
    contactsList:contactsListReducer,
});

const store = configureStore(
    { reducer: reducer },
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
