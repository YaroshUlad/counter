import React from 'react';
import s from './SecondVariant.module.css'
import {CounterContainer} from "./Counter/CounterContainer";
import {Settings} from "./Settings/Settings";

type SecondVariantPropsType = {
}

export const SecondVariant: React.FC<SecondVariantPropsType> = () => {
    return (
        <div className={s.wrapper}>
            <Settings/>
            <CounterContainer/>
        </div>
    );
};
