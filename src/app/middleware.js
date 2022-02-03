import createSagaMiddleware from "@redux-saga/core";

export const sagaMiddleware = createSagaMiddleware();
const logger = ({getState}) => (dispatch) => (action) => {
    let result  = dispatch(action);
    const nextState = getState();
    window.localStorage.setItem('state',JSON.stringify(nextState))
    return result
}
export const middlewares = [logger,sagaMiddleware,];