import {connect} from "react-redux";
import {Settings} from "./Settings";
import {ActionType, SecondStateType, setMaxAC, setMinAC} from "../../redux/secondVarReducer";

const mapStateToProps = (state: SecondStateType) => {
    return {
        min: state.min,
        max: state.max,
    }
}
const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    const setMinCallback = (newMinValue: number) => {
        dispatch(setMinAC(newMinValue))
    }
    const setMaxCallback = (newMaxValue: number) => {
        dispatch(setMaxAC(newMaxValue))
    }
    return {
        setMin: setMinCallback,
        setMax: setMaxCallback
    }
}


export const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings)