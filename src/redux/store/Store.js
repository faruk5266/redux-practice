import cartReducer from "../reducers/cartReducer";

import{ createStore } from "redux";


export const store = createStore(cartReducer);