export interface INewsState {
    formattedNews: INews[];
    receivedNews: INews[];
}

export interface INews {
    id: number;
    title: string;
    content: string;
}

export interface INewsAction {
    type: string;
    payload?: any;
}

export enum NewsActionTypes {
    FORMAT_NEWS = "FORMAT_NEWS",
}

export interface IGetNewsAction {
    type: NewsActionTypes.FORMAT_NEWS;
    payload?: any;
}
