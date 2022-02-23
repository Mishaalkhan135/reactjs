import { authReducers } from "./Reducers";
import { createStore, applyMiddleware } from "redux";
//To save data in redux
import { persistStore, persistReducer } from "redux-persist";
//for Storage of redux
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducers);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);
export { store, persistor };
