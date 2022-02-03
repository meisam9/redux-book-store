import { ADD_WRITER, SAGA_DELETE_WRITER, UPDATE_WRITER_STATE } from "./writerConstants"

export const addWriter = (writer) => {
    return {
       type:ADD_WRITER ,
       payload: writer,
    }
}
export const updateWriterState = (newState) => {
    return {
        type:UPDATE_WRITER_STATE,
        payload:newState,
    }
}
export const deleteWriter = (writer) => {
    return {
        type:SAGA_DELETE_WRITER,
        payload:writer,
    }
}