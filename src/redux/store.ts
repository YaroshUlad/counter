import {combineReducers, createStore } from "redux";
import {loadState, saveState} from "./localStorage";
import {secondVarReducer} from "./secondVarReducer";

export const rootReducer = combineReducers({
    secondVariant: secondVarReducer
})

const persistedState = loadState();

export const store = createStore(rootReducer, persistedState)

store.subscribe(() => {
    saveState(store.getState());
});



export type AppStateType = ReturnType<typeof rootReducer>



// @ts-ignore
window.store = store