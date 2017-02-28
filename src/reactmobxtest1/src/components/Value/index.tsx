import * as React from 'react';

export interface Props {
    styles: string;
    value: number;
}

export const Value: React.StatelessComponent<Props> = props => {
    return (
        <span className={props.styles}>{props.value}</span>
    );
}
