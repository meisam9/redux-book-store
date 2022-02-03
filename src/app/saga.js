import { all, fork } from "redux-saga/effects";
import { rootBookSaga } from "../book/bookSaga";
import { rootWriterSaga } from "../writer/writerSaga";

export function* rootStoreSaga () {
    return yield all([fork(rootBookSaga), fork(rootWriterSaga)])
}