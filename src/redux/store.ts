import { createStore } from "redux";
import {secondVarReducer} from "./secondVarReducer";

export const store = createStore(secondVarReducer)

// @ts-ignore
window.store = store