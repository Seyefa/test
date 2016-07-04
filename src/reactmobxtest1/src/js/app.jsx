import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import config from './config.js';

class App extends React.Component {
    render() {
        let cn = classNames('logo');
        return (
            <div>
                <div className={cn}></div>
                {this.props.name}               
            </div>
        );
    }
}

ReactDOM.render(<App name={config.title}/>, document.getElementById('app'));