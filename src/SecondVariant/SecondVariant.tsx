import React from 'react';
import { Monitor } from './Monitor/Monitor';
import {Settings} from "./Settings/Settings";
import {Counter} from "./Counter/Counter";
import s from './SecondVariant.module.css'

type SecondVariantPropsType = {
}

export const SecondVariant: React.FC<SecondVariantPropsType> = ({}) => {
    return (
        <div className={s.wrapper}>
            <Settings/>
            <Counter/>
        </div>
    );
};
