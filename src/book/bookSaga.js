import {all, put, select, takeLatest} from 'redux-saga/effects';
import {  updateBookState } from './bookActions';
import { SAGA_DELETE_BOOK, SAGA_FILTER_BOOK, SAGA_REMOVE_FILTER_BOOK } from './bookConstans';

function *sagaDeleteBook(action) {
    const deleteItem = action.payload;
    const bookState = yield select((state)=>state.book);
    const newState = bookState.filter(item=> item !== deleteItem);
    yield put(updateBookState(newState));


}

function *sagaFilterBooks(action) {
    const {title,writer,rate} = action.payload;
    const bookState = yield select((state)=>state.book);
    localStorage.setItem('beforeFilterBook',JSON.stringify(bookState) ); // save book state for later use
    const newState = ()=>{
        const searchTitle = bookState.filter(book=>book.title.toLowerCase().includes(title.toLowerCase()));
        const searchWriter = searchTitle.filter(book=>book.writer.firstName.toLowerCase().includes(writer.toLowerCase()) || book.writer.lastName.toLowerCase().includes(writer.toLowerCase()));
        const filterRating = searchWriter.filter(book=>Number(book.rate) >= Number(rate))
        return filterRating;
    }
    yield put(updateBookState(newState()))
}

function *sagaRemoveFilterBooks() {
    const newState = JSON.parse(localStorage.getItem('beforeFilterBook')) || [];
    yield put(updateBookState(newState));
    localStorage.removeItem('beforeFilterBook');
}

export function* rootBookSaga() {
    yield all([takeLatest(SAGA_DELETE_BOOK,sagaDeleteBook)]);
    yield all([takeLatest(SAGA_FILTER_BOOK,sagaFilterBooks)]);
    yield all([takeLatest(SAGA_REMOVE_FILTER_BOOK,sagaRemoveFilterBooks)]);

}