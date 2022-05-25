import React from 'react';
import { Monitor } from './Monitor/Monitor';
import {Settings} from "./Settings/Settings";

type SecondVariantPropsType = {
    min: number
    max: number
    value: number|string
}

export const SecondVariant: React.FC<SecondVariantPropsType> = ({}) => {
    return (
        <div>
            <Settings/>
            <Monitor/>
        </div>
    );
};
