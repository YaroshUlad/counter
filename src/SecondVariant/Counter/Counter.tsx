import React from 'react';
import s from './Counter.module.css'
import {Button} from "../../components/Button";

type CounterPropsType = {
    value: string
    increase: ()=>void,
    decrease: ()=>void,
    reset: ()=>void
}

export const Counter = () => {

    const increase = () => {
    }
    const decrease = () => {
    }
    const reset = () => {
    }


    return (
        <div className={s.wrapper}>
            <div className={s.monitor}>
                monitor
            </div>
            <div className={s.buttonArea}>
                <Button title={'inc'} callback={increase}/>
                <Button title={'dec'} callback={decrease}/>
                <Button title={'reset'} callback={reset}/>
            </div>
        </div>
    );
};