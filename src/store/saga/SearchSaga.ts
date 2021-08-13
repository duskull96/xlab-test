import { ISearchAction, SearchActionTypes } from "../../types/SearchTypes";
import { takeEvery, call, select, put } from "@redux-saga/core/effects";
import { RootState } from "..";
import {
    FetchAddressFailed,
    SetReceivedAddress,
} from "../action-creators/SearchCreator";
import { Api } from "./Api";

const queriedAddressState = (state: RootState) => state.search.queriedAddress;
const api = new Api();

function FetchAddress(queriedAddress: string) {
    return api
        .getAddress(queriedAddress, 20)
        .then((response) => ({ response }))
        .catch((error) => ({ error }));
}

async function ReadStream(response: any) {
    const reader = response.body.getReader();

    while (true) {
        const { done, value } = await reader.read();
        if (done) {
            break;
        }
        const str = new TextDecoder().decode(value);
        const data = JSON.parse(str);
        return data;
    }
}

function* SearchWorker(action: ISearchAction) {
    const queriedAddress = yield select(queriedAddressState);
    const { response, error } = yield call(FetchAddress, queriedAddress);
    if (response) {
        const addresses = yield call(ReadStream, response);
        yield addresses.suggestions.forEach((address: any, id: number) => {
            address.id = id;
        });
        yield put(SetReceivedAddress(addresses.suggestions));
    } else {
        yield put(FetchAddressFailed(error));
    }
}

export function* SearchWatcher() {
    yield takeEvery(SearchActionTypes.FETCH_QUERIED_ADDRESS, SearchWorker);
}
