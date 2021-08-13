import { INewsAction, NewsActionTypes } from "../../types/NewsTypes";

export const FormatNews = (): INewsAction => {
    return {
        type: NewsActionTypes.FORMAT_NEWS,
    };
};
