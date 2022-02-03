import { put,select,all,takeLatest } from "redux-saga/effects";
//actions
import { updateBookState } from "../book/bookActions";
import { updateWriterState } from "./writerActions";
import { SAGA_DELETE_WRITER } from "./writerConstants";

function* sagaDeleteWriter (action)  {
    const deleteItem = action.payload;
    const bookState = yield select((state)=>state.book);
    const writerState = yield select((state)=>state.writer);
    const newWriterState = writerState.filter(writer=>writer !== deleteItem)
    const newBookState = bookState.filter(book=>book.writer.id !== deleteItem.id)
    yield put(updateBookState(newBookState));
    yield put(updateWriterState(newWriterState));
}

export function* rootWriterSaga() {
    yield all([takeLatest(SAGA_DELETE_WRITER,sagaDeleteWriter)])
}