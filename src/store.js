import { createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer } from "./reducers/userReducer";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { galleryReducer } from "./reducers/galleryReducer";
import { newContactUsReducer } from "./reducers/contactUsReducer";

const reducer = combineReducers({
    user: userReducer,
    gallery: galleryReducer,
    newContactUs: newContactUsReducer,
});

const store = configureStore(
    { reducer: reducer },
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
