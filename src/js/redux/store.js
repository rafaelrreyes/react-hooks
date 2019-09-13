import { createStore, combineReducers } from "redux";
import globalReducer from "REDUX/Global/GlobalReducer";
import userReducer from "REDUX/User/UserReducer";

const rootReducer = combineReducers({
	globalReducer,
	userReducer
});
export const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
