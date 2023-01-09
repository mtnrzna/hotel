import { createStore, combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/client/userReducer";
import { chosenRoomsReducer } from "./reducers/client/roomReducer";
import { galleryReducer } from "./reducers/client/galleryReducer";
import { newContactUsReducer } from "./reducers/client/contactUsReducer";
import { adminReducer } from "./reducers/admin/adminReducer";

const reducer = combineReducers({
    user: userReducer,
    chosenRooms: chosenRoomsReducer,
    gallery: galleryReducer,
    newContactUs: newContactUsReducer,
    admin: adminReducer,
});

const store = configureStore(
    { reducer: reducer },
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
