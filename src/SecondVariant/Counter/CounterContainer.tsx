import {connect} from "react-redux";
import {Counter} from "./Counter";
import {
    ActionType,
    decreaseValueAC,
    increaseValueAC,
    resetValueAC,
} from "../../redux/secondVarReducer";
import {AppStateType} from "../../redux/store";

const mapState = (state: AppStateType) => {
    return {
        value: state.secondVariant.value,
        minValue: state.secondVariant.minValue,
        maxValue: state.secondVariant.maxValue
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