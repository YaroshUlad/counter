import React, {ChangeEvent} from 'react';
import s from './Settings.module.css'
import {Button} from "../../components/Button";

type SettingsPropsType = {
    min: string
    max: string
    setMin: (newMin: string) => void
    setMax: (newMax: string) => void
    saveSettings: () => void
}
export const Settings = (props: SettingsPropsType) => {
    const onMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newMax = e.currentTarget.value
        props.setMax(newMax)
    }
    const onMinChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newMin = e.currentTarget.value
        props.setMin(newMin)
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
                           min={0}
                           type="number"/>
                </div>
            </div>
            <div className={s.buttonsArea}>
                <Button title={'Set'}
                        callback={setSettings}/>
            </div>

        </div>
    );
};

