import React from 'react';
import s from './Settings.module.css'
import {Button} from "../../components/Button";

type SettingsPropsType = {
    min: number
    max: number
    setMin: (newMin: number) => void
    setMax: (newMax: number) => void
}
export const Settings = (props: SettingsPropsType) => {

    return (
        <div className={s.wrapper}>
            <div className={s.window}>
                <div>max <input min={0} type="number"/></div>
                <div>min <input min={0} type="number"/></div>
            </div>
            <div className={s.buttonsArea}>
                <Button title={'Set'} callback={()=>{}}/>
            </div>

        </div>
    );
};

