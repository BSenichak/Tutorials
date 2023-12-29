import { configureStore, Tuple } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import themeReducer from "./themeReducer";
import Comments from "./Comments";
export default configureStore({
    reducer: {
        theme: themeReducer,
        comments: Comments
    },
    middleware: () => new Tuple(thunk, logger),
});
