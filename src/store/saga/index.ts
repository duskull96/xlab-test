import { all } from "@redux-saga/core/effects";
import { SearchWatcher } from "./SearchSaga";

export function* rootWatcher() {
    yield all([SearchWatcher()]);
}
