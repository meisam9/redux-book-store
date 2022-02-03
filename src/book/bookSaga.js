import {all, put, select, takeLatest} from 'redux-saga/effects'
import {  updateBookState } from './bookActions';
import { SAGA_DELETE_BOOK } from './bookConstans';

function *sagaDeleteBook(action) {
    const deleteItem = action.payload;
    const bookState = yield select((state)=>state.book)
    const newState = bookState.filter(item=> item !== deleteItem)
    yield put(updateBookState(newState))


}

export function* rootBookSaga() {
    yield all([takeLatest(SAGA_DELETE_BOOK,sagaDeleteBook)])
}