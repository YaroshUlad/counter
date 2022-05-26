import React from 'react';
import s from './SecondVariant.module.css'
import {SettingsContainer} from "./Settings/SettingsContainer";
import {CounterContainer} from "./Counter/CounterConteiner";

type SecondVariantPropsType = {
}

export const SecondVariant: React.FC<SecondVariantPropsType> = () => {
    return (
        <div className={s.wrapper}>
            <SettingsContainer/>
            <CounterContainer/>
        </div>
    );
};
