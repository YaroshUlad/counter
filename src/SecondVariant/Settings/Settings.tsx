import React from 'react';
import s from './Settings.module.css'
import {Button} from "../../components/Button";

export const Settings = () => {
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

