import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import memosReducer from "../features/todos/todoSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = { key: "auth", storage, whitelist: ["token"] };
const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
  reducer: { auth: persistedAuthReducer, memos: memosReducer },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});
export default store;
export const persistor = persistStore(store);
