import * as React from 'react';

export interface ButtonProps {
    type?: string;
    className?: string;
}

export const Button: React.StatelessComponent<ButtonProps> = props => {
    let style: string[] = [];
    style.push('btn');
    style.push(`btn-${props.type}`);
    props.className && style.push(`${props.className}`);
    return (
        <button type="button" className={style.join(' ')}>{props.children}</button>
    )
}
Button.defaultProps = {
    type: 'default'
}
