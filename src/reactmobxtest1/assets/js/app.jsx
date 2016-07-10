import React from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';
import { Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import config from './config.js';

class App extends React.Component {
    render() {
        let cn2 = cn('logo');
        return (
            <div>
                <div className={cn2}></div>
                <div>
                    <Button bsStyle="primary"><FontAwesome name="check" /> Spara</Button>
                    <Button bsStyle="danger"><FontAwesome name="times" /> Avbryt</Button>
                </div>
                <div><FontAwesome name="bus" /></div>
                <div><FontAwesome name="rocket" /></div>
                {this.props.name}
            </div>
        );
    }
}

ReactDOM.render(<App name={config.title}/>, document.getElementById('app'));