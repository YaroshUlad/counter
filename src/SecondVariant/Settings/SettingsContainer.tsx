import {connect} from "react-redux";
import {Settings} from "./Settings";
import {ActionType, SecondStateType, setMaxAC, setMinAC, setSettingsAC} from "../../redux/secondVarReducer";

const mapStateToProps = (state: SecondStateType) => {
    return {
        min: state.min,
        max: state.max,
    }
}
const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    const setMinCallback = (newMinValue: string) => {
        dispatch(setMinAC(newMinValue))
    }
    const setMaxCallback = (newMaxValue: string) => {
        dispatch(setMaxAC(newMaxValue))
    }
    return {
        setMin: setMinCallback,
        setMax: setMaxCallback,
        saveSettings: () => dispatch(setSettingsAC())
    }
}


export const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings)