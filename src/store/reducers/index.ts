import { combineReducers } from "redux";
import { SearchReducer } from "./SearchReducer";
import { NewsReducer } from "./NewsReducer";

export const rootReducer = combineReducers({
    search: SearchReducer,
    news: NewsReducer,
});
