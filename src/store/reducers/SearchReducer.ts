import {
    ISearchAction,
    ISearchState,
    SearchActionTypes,
} from "../../types/SearchTypes";

const initialState: ISearchState = {
    queriedAddress: "",
    receivedAddresses: [],
};
export const SearchReducer = (
    state = initialState,
    action: ISearchAction
): ISearchState => {
    switch (action.type) {
        case SearchActionTypes.SET_QUERIED_ADDRESS:
            return {
                queriedAddress: action.payload,
                receivedAddresses: state.receivedAddresses,
                error: {
                    family: "",
                    message: "",
                    reason: "",
                },
            };
        case SearchActionTypes.SET_QUERIED_ADDRESS_FAILED:
            return {
                queriedAddress: state.queriedAddress,
                receivedAddresses: state.receivedAddresses,
                error: {
                    family: "CLIENT_ERROR",
                    message: "Адрес должен состоять минимум из 3 символов",
                    reason: "Incorrect address",
                },
            };
        case SearchActionTypes.SET_RECIEVED_ADDRESS:
            return {
                queriedAddress: state.queriedAddress,
                receivedAddresses: action.payload,
            };
        case SearchActionTypes.FETCH_QUERIED_ADDRESS_FAILED:
            return {
                queriedAddress: state.queriedAddress,
                receivedAddresses: [],
                error: action.payload,
            };
        default:
            return state;
    }
};
