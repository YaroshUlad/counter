import React from 'react';
import {Settings} from "./Settings/Settings";
import {Counter} from "./Counter/Counter";
import s from './SecondVariant.module.css'
import {SettingsContainer} from "./Settings/SettingsContainer";

type SecondVariantPropsType = {
}

export const SecondVariant: React.FC<SecondVariantPropsType> = () => {
    return (
        <div className={s.wrapper}>
            {/*<Settings/>*/}
            <SettingsContainer/>
            <Counter/>
        </div>
    );
};
