import * as React from 'react';

export interface Props {
    value: number;
}

export default class Value extends React.Component<Props, {}> {
    render() {
        return (
            <span>{this.props.value}</span>
        );
    }
}
