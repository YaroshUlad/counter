import React from 'react';
import s from './Counter.module.css'
import {Button} from "../../components/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {decreaseValueAC, increaseValueAC, resetValueAC} from "../../redux/secondVarReducer";


export const Counter = () => {
    const dispatch = useDispatch()
    const value = useSelector<AppStateType, string>(state => state.secondVariant.value)
    const minValue = useSelector<AppStateType, string>(state => state.secondVariant.minValue)
    const maxValue = useSelector<AppStateType, string>(state => state.secondVariant.maxValue)
    const increase = () => {
        if (value < maxValue) {
            const newValue = String(Number(value) + 1)
            //props.increase(newValue)
            dispatch(increaseValueAC(newValue))
        }
    }
    const decrease = () => {
        if (value > minValue) {
            const newValue = String(Number(value) - 1)
            dispatch(decreaseValueAC(newValue))
        }
    }
    const reset = () => {
        if (value > minValue) {
            dispatch(resetValueAC())
        }
    }
    const a = value === maxValue || isNaN(+value)
    const c = value === minValue || isNaN(+value)

    return (
        <div className={s.wrapper}>
            <div className={`${s.monitor} ${a ? s.error : ''}`}>
                {value}
            </div>
            <div className={s.buttonArea}>
                <Button disabled={a} title={'inc'} callback={increase}/>
                <Button disabled={c} title={'dec'} callback={decrease}/>
                <Button disabled={c} title={'reset'} callback={reset}/>
            </div>
        </div>
    );
};