import { ADD_BOOK, SAGA_DELETE_BOOK, UPDATE_BOOK_STATE } from "./bookConstans"

export const addBook = (book) => {
    return {
        type: ADD_BOOK,
        payload:book,
    }
}
export const updateBookState = (newState) => {
    return {
        type:UPDATE_BOOK_STATE,
        payload:newState,
    }
}
export const deleteBook = (item) => {
    return {
        type:SAGA_DELETE_BOOK,
        payload:item,
    }
}