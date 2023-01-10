import { createStore, combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/client/userReducer";
import {
    chosenRoomsReducer,
    incrementRoomLikeReducer,
} from "./reducers/client/roomReducer";
import { galleryReducer } from "./reducers/client/galleryReducer";
import { newContactUsReducer } from "./reducers/client/contactUsReducer";
import { chosenNewsReducer } from "./reducers/client/newsReducer";

const reducer = combineReducers({
    user: userReducer,
    chosenRooms: chosenRoomsReducer,
    incrementRoomLike: incrementRoomLikeReducer,
    chosenNews: chosenNewsReducer,
    gallery: galleryReducer,
    newContactUs: newContactUsReducer,
});

const store = configureStore(
    { reducer: reducer },
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
