import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./reducers";
import { rootWatcher } from "./saga";

export const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
export type RootState = ReturnType<typeof rootReducer>;

sagaMiddleware.run(rootWatcher)

declare global {
    interface Window {
        store: any;
    }
}

window.store = store || {};
