import { ADD_BOOK, UPDATE_BOOK_STATE } from "./bookConstans";

export const initialBookState = []

export const bookReducer = (state=initialBookState, action) => {
    switch(action.type) {
        case ADD_BOOK: {
            return [...state,action.payload];
        };
        case UPDATE_BOOK_STATE : {
            return action.payload
        }
        default:
            return state;
    };
};