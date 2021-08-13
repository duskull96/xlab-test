import {
    IFetchAddressFailedAction,
    IFetchQueriedAddressAction,
    ISearchError,
    ISetQueriedAddressAction,
    ISetQueriedAddressFailedAction,
    ISetReceivedAddressAction,
} from "./../../types/SearchTypes";
import { IAddress, SearchActionTypes } from "../../types/SearchTypes";

export const SetQueriedAddress = (
    payload: string
): ISetQueriedAddressAction => {
    return {
        type: SearchActionTypes.SET_QUERIED_ADDRESS,
        payload: payload,
    };
};

export const FetchQueriedAddress = (
    payload: string
): IFetchQueriedAddressAction => {
    return {
        type: SearchActionTypes.FETCH_QUERIED_ADDRESS,
        payload: payload,
    };
};
export const SetReceivedAddress = (
    payload: IAddress[]
): ISetReceivedAddressAction => {
    return {
        type: SearchActionTypes.SET_RECIEVED_ADDRESS,
        payload: payload,
    };
};

export const FetchAddressFailed = (
    payload: ISearchError
): IFetchAddressFailedAction => {
    return {
        type: SearchActionTypes.FETCH_QUERIED_ADDRESS_FAILED,
        payload: payload,
    };
};

export const SetQueriedAddressFailed = (): ISetQueriedAddressFailedAction => {
    return {
        type: SearchActionTypes.SET_QUERIED_ADDRESS_FAILED,
    };
};
