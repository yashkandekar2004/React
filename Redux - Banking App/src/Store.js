import { createStore } from "redux";
import { combineReducers } from "redux";

import accountReducer from "./Features/accounts/accountSlice";
import customerReducer from "./Features/customers/customorSlice";
// combine reducers
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);
store.subscribe(() => {
  console.log("state changed", store.getState());
});

export default store;