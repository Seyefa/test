import { observable, toJS } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Button } from 'react-bootstrap';
import Fa from 'react-fontawesome';

import config from './config';

@observer class App extends React.Component {
    @observable someObj = { someInt: 0 };
    
    constructor() {
        super();
    }

    inc() {
        this.someObj.someInt++;
    }

    render() {
        let cn = classNames('logo');
        return (
            <div>
                <div className={cn}></div>
                <div>
                    <Button bsStyle="success" onClick={() => this.inc()}><Fa name="plus" spin={this.someObj.someInt >= 5} /></Button>
                    <Button bsStyle="default" disabled={this.someObj.someInt === 0} onClick={() => this.someObj.someInt > 0 && this.someObj.someInt--}><Fa name="minus" /></Button>
                </div>
                <div className={classNames({ 'text2': this.someObj.someInt >= 5})}>{this.someObj.someInt}</div>
                <div>config.title: {this.props.name}</div>
            </div>
        );
    }
}

ReactDOM.render(<App name={config.title}/>, document.getElementById('app'));