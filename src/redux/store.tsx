import { createStore } from "redux";
import { reducer } from "./reducer";

export let store = createStore(reducer);

export type RootState = ReturnType<typeof store.getState>;
