import mobx from 'mobx';
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Button } from 'react-bootstrap';
import Fa from 'react-fontawesome';

import config from './config';

class App extends React.Component {

    constructor() {
        super();
    }

    render() {
        let cn = classNames('logo');
        return (
            <div>
                <div className={cn}></div>
                <div>
                    <Button bsStyle="primary"><Fa name="check" /> Spara</Button>
                    <Button bsStyle="danger"><Fa name="times" /> Avbryt</Button>
                </div>
                <div>
                    <Fa name="bus" />
                    <Fa name="rocket" />
                </div>
                {this.props.name}
            </div>
        );
    }
}

ReactDOM.render(<App name={config.title}/>, document.getElementById('app'));