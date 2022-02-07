import { put,select,all,takeLatest } from "redux-saga/effects";
//actions
import { updateBookState } from "../book/bookActions";
import { updateWriterState } from "./writerActions";
import { SAGA_DELETE_WRITER, SAGA_EDIT_WRITER, SAGA_FILTER_WRITER, SAGA_REMOVE_FILTER_WRITER } from "./writerConstants";

function* sagaDeleteWriter (action)  {
    const deleteItem = action.payload;
    const bookState = yield select((state)=>state.book);
    const writerState = yield select((state)=>state.writer);
    const newWriterState = writerState.filter(writer=>writer !== deleteItem)
    const newBookState = bookState.filter(book=>book.writer.id !== deleteItem.id)
    yield put(updateBookState(newBookState));
    yield put(updateWriterState(newWriterState));
}

function *sagaFilterWriter(action) {
    const {name} = action.payload;
    const writerState = yield select((state)=>state.writer);
    localStorage.setItem('beforeFilterWriter',JSON.stringify(writerState) ); // save writer state for later use
    const newState = ()=>{
        const searchName = writerState.filter(writer=>writer.firstName.toLowerCase().includes(name.toLowerCase()) || writer.lastName.toLowerCase().includes(name.toLowerCase()));
        return searchName;
    }
    yield put(updateWriterState(newState()))
}
function *sagaRemoveFilterWriters() {
    const newState = JSON.parse(localStorage.getItem('beforeFilterWriter')) || [];
    yield put(updateWriterState(newState));
    localStorage.removeItem('beforeFilterWriter');
}

function *sagaEditWriter(action) {
    const editedWriter = action.payload;
    const writers = yield select((state)=>state.writer);
    const books = yield select((state)=>state.book);
    const index = writers.findIndex(writer=>writer.id === editedWriter.id)
    if(index !== -1) {
        writers[index].firstName = editedWriter.firstName;
        writers[index].lastName = editedWriter.lastName;
        books.map((book,index)=>{
            if(book.writer.id === editedWriter.id) {
                books[index].writer = editedWriter
            }
        })
    }
}
export function* rootWriterSaga() {
    yield all([takeLatest(SAGA_DELETE_WRITER,sagaDeleteWriter)])
    yield all([takeLatest(SAGA_FILTER_WRITER,sagaFilterWriter)])
    yield all([takeLatest(SAGA_REMOVE_FILTER_WRITER,sagaRemoveFilterWriters)])
    yield all([takeLatest(SAGA_EDIT_WRITER,sagaEditWriter)])
}