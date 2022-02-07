import { ADD_BOOK, SAGA_DELETE_BOOK, SAGA_FILTER_BOOK, SAGA_REMOVE_FILTER_BOOK, UPDATE_BOOK_STATE } from "./bookConstans"

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

export const filterBook = (filterItems) => {
    return {
        type:SAGA_FILTER_BOOK,
        payload:filterItems,
    }
}

export const removeFilterBooks = () => {
    return {type:SAGA_REMOVE_FILTER_BOOK,}
}