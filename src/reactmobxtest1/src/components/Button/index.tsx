import * as React from 'react';

export interface ButtonProps {
    type?: string;
    className?: string;
}

const Button: React.StatelessComponent<ButtonProps> = props => {
    let style = `btn btn-${props.type}`;
    if (props.className !== undefined) style += ` ${props.className}`;
    return (
        <button type="button" className={style}>{props.children}</button>
    )
}
Button.defaultProps = {
    type: 'default'
}

export { Button };
