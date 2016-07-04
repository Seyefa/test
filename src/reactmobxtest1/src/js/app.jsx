import React from 'react';
import ReactDOM from 'react-dom';

import config from './config.js';

class App extends React.Component {
    render() {
        return <div>{this.props.name}</div>
    }
}
 
ReactDOM.render(<App name={config.title}/>, document.getElementById('app'));