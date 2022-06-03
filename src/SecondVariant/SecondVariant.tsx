import React from 'react';
import s from './SecondVariant.module.css'
import {Settings} from "./Settings/Settings";
import {Counter} from "./Counter/Counter";

type SecondVariantPropsType = {}

export const SecondVariant: React.FC<SecondVariantPropsType> = () => {
    return (
        <div className={s.wrapper}>
            <Settings/>
            <Counter/>
        </div>
    );
};
