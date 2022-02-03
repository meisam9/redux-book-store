import { combineReducers } from "redux";
//reducers
import { bookReducer } from "../book/bookReducr";
import {writerReducer } from "../writer/writerReducer";

export const reducers = combineReducers({
    book: bookReducer,
    writer: writerReducer,
})