import { ADD_WRITER, UPDATE_WRITER_STATE } from "./writerConstants";

const initialWriterState = [];

export const writerReducer = (state=initialWriterState,action) => {
    switch (action.type) {
        case (ADD_WRITER) :{
            return [...state,action.payload]
        };
        case UPDATE_WRITER_STATE : {
            return action.payload
        }
        default :
        return state
    }
}