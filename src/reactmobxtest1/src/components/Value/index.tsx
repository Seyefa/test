import * as React from 'react';

export interface Props {
    styles: string;
    value: number;
}

export default class Value extends React.Component<Props, {}> {
    render() {
        return (
            <span className={this.props.styles}>{this.props.value}</span>
        );
    }
}
