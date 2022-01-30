import { combineReducers } from "redux";

import users from "./users.js";
import filters from "./filters.js";
import search from "./search.js";

const combinedReducer = combineReducers({users, filters, search});

export default combinedReducer;