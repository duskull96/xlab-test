export interface ISearchAction {
    type: string;
    payload: any;
}

export interface ISearchState {
    queriedAddress: string;
    receivedAddresses: IAddress[];
    error?: ISearchError;
}
export interface ISearchError {
    family: string;
    message: string;
    reason: string;
}
export interface IAddress {
    id: number;
    value: string;
}
export enum SearchActionTypes {
    SET_QUERIED_ADDRESS = "SET_QUERIED_ADDRESS",
    SET_QUERIED_ADDRESS_FAILED = "SET_QUERIED_ADDRESS_FAILED",
    SET_RECIEVED_ADDRESS = "SET_RECIEVED_ADDRESS",
    FETCH_QUERIED_ADDRESS = "FETCH_QUERIED_ADDRESS",
    FETCH_QUERIED_ADDRESS_FAILED = "FETCH_QUERIED_ADDRESS_FAILED",
}
export interface ISetQueriedAddressAction {
    type: SearchActionTypes.SET_QUERIED_ADDRESS;
    payload: string;
}
export interface IFetchQueriedAddressAction {
    type: SearchActionTypes.FETCH_QUERIED_ADDRESS;
    payload: string;
}

export interface ISetReceivedAddressAction {
    type: SearchActionTypes.SET_RECIEVED_ADDRESS;
    payload: IAddress[];
}

export interface IFetchAddressFailedAction {
    type: SearchActionTypes.FETCH_QUERIED_ADDRESS_FAILED;
    payload: ISearchError;
}

export interface ISetQueriedAddressFailedAction {
    type: SearchActionTypes.SET_QUERIED_ADDRESS_FAILED;
}
