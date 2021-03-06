import React, {ChangeEvent} from 'react';
import s from './Settings.module.css'
import {Button} from "../../components/Button";
import {useDispatch, useSelector} from "react-redux";
import {getMax, getMin, getValue, setMaxAC, setMinAC, setSettingsAC} from "../../redux/secondVarReducer";

export const Settings = () => {
    const min = useSelector(getMin)
    const max = useSelector(getMax)
    const value = useSelector(getValue)
    const dispatch = useDispatch()

    const disableSettings = (isNaN(+value) && value !== 'Set') || min === '' || max === ''

    const onMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newMax = e.currentTarget.value
        dispatch(setMaxAC(newMax))
    }
    const onMinChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newMin = e.currentTarget.value
        dispatch(setMinAC(newMin))
    }
    const setSettings = () => {
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

