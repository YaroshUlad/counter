import React from 'react';
import { Monitor } from './Monitor/Monitor';
import {Settings} from "./Settings/Settings";
import {Counter} from "./Counter/Counter";
import s from './SecondVariant.module.css'

type SecondVariantPropsType = {
    min: number
    max: number
    value: number|string
}

export const SecondVariant: React.FC<SecondVariantPropsType> = ({}) => {
    return (
        <div className={s.wrapper}>
            <Settings/>
            {/*<Monitor/>*/}
            <Counter/>
        </div>
    );
};
