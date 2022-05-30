import React, {ChangeEvent} from 'react';
import s from './Settings.module.css'
import {Button} from "../../components/Button";
import {useDispatch} from "react-redux";
import {setMaxAC, setMinAC} from "../../redux/secondVarReducer";

type SettingsPropsType = {
    value: string
    min: string
    max: string
    setMin: (newMin: string) => void
    setMax: (newMax: string) => void
    saveSettings: () => void
}
export const Settings = (props: SettingsPropsType) => {

    const dispatch = useDispatch()

    const disableSettings = (isNaN(+props.value)&&props.value!== 'Set')||props.min===''||props.max===''

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
        props.saveSettings()
    }
    return (
        <div className={s.wrapper}>
            <div className={s.window}>
                <div>
                    max
                    <input onChange={onMaxChange}
                           value={props.max}
                           type="number"/>
                </div>
                <div>
                    min
                    <input onChange={onMinChange}
                           value={props.min}
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

