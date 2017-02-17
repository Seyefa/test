import * as React from 'react';
import { observer } from 'mobx-react';
// import styles from './styles.scss';

export interface TextboxProps {
    title: string;
    value: string;
    editing: boolean;
}

export const Textbox = observer<{ params: TextboxProps }>(props => {
    
    let change = (event: React.SyntheticEvent<any>) => {
        const target = event.target as HTMLInputElement;
        props.params.value = target.value;
    }

    return (
        <div className="form-horizontal">
            <div className="form-group">
                <label className="control-label col-sm-3">{props.params.title}</label>
                {!props.params.editing && <p className="form-control-static col-sm-9">{props.params.value}</p>}
                {props.params.editing && <div className="col-sm-9">
                    <input className="form-control" value={props.params.value} onChange={change} />
                </div>}
            </div>
        </div>
    );
});
