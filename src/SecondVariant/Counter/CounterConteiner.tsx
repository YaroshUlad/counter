import {connect} from "react-redux";
import {Counter} from "./Counter";
import {ActionType, SecondStateType} from "../../redux/secondVarReducer";

const mapState = (state: SecondStateType) => {
    return {
        value: state.value
    }
}

const mapDispatch = (dispatch: (action: ActionType) => void) => {
    const increase = () => {
    }
    const decrease = () => {
    }
    const reset = () => {
    }
    return {
        increase: increase,
        decrease: decrease,
        reset: reset
    }
}

export const CounterContainer = connect (mapState, mapDispatch) (Counter)