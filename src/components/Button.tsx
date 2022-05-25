import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type FullButtonPropsType = {
    title: string
    callback: () => void
} & DefaultButtonPropsType

export const Button: React.FC<FullButtonPropsType> = ({title, callback, ...rest}) => {
    return (
        <button onClick={callback} {...rest}>{title}</button>
    );
};
