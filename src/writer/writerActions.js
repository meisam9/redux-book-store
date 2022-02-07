import { ADD_WRITER, SAGA_DELETE_WRITER, SAGA_EDIT_WRITER, SAGA_FILTER_WRITER, SAGA_REMOVE_FILTER_WRITER, UPDATE_WRITER_STATE } from "./writerConstants"

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

export const filterWriter = (filterItems) => {
    return {
        type:SAGA_FILTER_WRITER,
        payload:filterItems,
    }
}

export const removeFilterWriters = () => {
    return {type:SAGA_REMOVE_FILTER_WRITER,}
}

export const editWriter = (editedWriter) => {
    return {
        type:SAGA_EDIT_WRITER,
        payload:editedWriter,
    }
}