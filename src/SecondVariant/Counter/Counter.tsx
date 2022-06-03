import React from 'react';
import s from './Counter.module.css'
import {Button} from "../../components/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";

/*type CounterPropsType = {
    value: string
    minValue: string,
    maxValue: string
    increase: (value: string) => void,
    decrease: (value: string) => void,
    reset: () => void
}*/

export const Counter = (/*props: CounterPropsType*/) => {
    const dispatch = useDispatch()
    const value = useSelector<AppStateType, string>(state => state.secondVariant.value)
    const minValue = useSelector<AppStateType, string>(state => state.secondVariant.minValue)
    const maxValue = useSelector<AppStateType, string>(state => state.secondVariant.maxValue)
    const increase = () => {
        if (props.value < props.maxValue) {
            const newValue = String(Number(props.value) + 1)
            props.increase(newValue)
        }
    }
    const decrease = () => {
        if (props.value > props.minValue) {
            const newValue = String(Number(props.value) - 1)
            props.decrease(newValue)
        }
    }
    const reset = () => {
        if (props.value > props.minValue) {
            props.reset()
        }
    }
    const a = props.value === props.maxValue || isNaN(+props.value)
    const c = props.value === props.minValue || isNaN(+props.value)

    return (
        <div className={s.wrapper}>
            <div className={`${s.monitor} ${a ? s.error : ''}`}>
                {props.value}
            </div>
            <div className={s.buttonArea}>
                <Button disabled={a} title={'inc'} callback={increase}/>
                <Button disabled={c} title={'dec'} callback={decrease}/>
                <Button disabled={c} title={'reset'} callback={reset}/>
            </div>
        </div>
    );
};