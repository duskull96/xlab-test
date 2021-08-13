import * as SearchActionCreators from "./SearchCreator";
import * as NewsActionCreators from "./NewsCreator";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ...SearchActionCreators,
    ...NewsActionCreators,
};
