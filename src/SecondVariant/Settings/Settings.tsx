import React, {ChangeEvent} from 'react';
import s from './Settings.module.css'
import {Button} from "../../components/Button";
import {useDispatch, useSelector} from "react-redux";
import {getMax, getMin, getValue, setMaxAC, setMinAC, setSettingsAC} from "../../redux/secondVarReducer";

type SettingsPropsType = {
    value: string
    min: string
    max: string
    setMin: (newMin: string) => void
    setMax: (newMax: string) => void
    saveSettings: () => void
}
export const Settings = (props: SettingsPropsType) => {
    const min = useSelector(getMin)
    const max = useSelector(getMax)
    const value = useSelector(getValue)
    const dispatch = useDispatch()

    const disableSettings = (isNaN(+value) && value !== 'Set') || min === '' || max === ''

    const onMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newMax = e.currentTarget.value
        //props.setMax(newMax)
        dispatch(setMaxAC(newMax))
    }
    const onMinChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newMin = e.currentTarget.value
        //props.setMin(newMin)
        dispatch(setMinAC(newMin))
    }
    const setSettings = () => {
        //props.saveSettings()
        dispatch(setSettingsAC())
    }
    return (
        <div className={s.wrapper}>
            <div className={s.window}>
                <div>
                    max
                    <input onChange={onMaxChange}
                           value={max}
                           type="number"/>
                </div>
                <div>
                    min
                    <input onChange={onMinChange}
                           value={min}
                           type="number"/>
                </div>
            </div>
            <div className={s.buttonsArea}>
                <Button disabled={disableSettings}
                        title={'Set'}
                        callback={setSettings}/>
            </div>

        </div>
    );
};

