import { compose,createStore, applyMiddleware } from "redux";
import { reducers } from "./reducers";
import { rootStoreSaga } from "./saga";
import { middlewares, sagaMiddleware } from "./middleware";

const composeEnhancer = process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
const preloadedState = JSON.parse(window.localStorage.getItem('state') || "{}");
export const appStore = createStore(reducers,preloadedState,composeEnhancer(applyMiddleware(...middlewares)));
sagaMiddleware.run(rootStoreSaga)