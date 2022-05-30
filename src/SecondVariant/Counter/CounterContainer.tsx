import {connect} from "react-redux";
import {Counter} from "./Counter";
import {
    ActionType,
    decreaseValueAC,
    increaseValueAC,
    resetValueAC,
    SecondStateType
} from "../../redux/secondVarReducer";

const mapState = (state: SecondStateType) => {
    return {
        value: state.value,
        minValue: state.minValue,
        maxValue: state.maxValue
    }
}

const mapDispatch = (dispatch: (action: ActionType) => void) => {
    const increase = (value: string) => {
        dispatch(increaseValueAC(value))
    }
    const decrease = (value: string) => {
        dispatch(decreaseValueAC(value))
    }
    const reset = () => {
        dispatch(resetValueAC())
    }
    return {
        increase: increase,
        decrease: decrease,
        reset: reset
    }
}

export const CounterContainer = connect (mapState, mapDispatch) (Counter)