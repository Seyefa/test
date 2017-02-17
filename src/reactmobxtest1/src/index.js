import React from 'react';
import ReactDOM from 'react-dom';

import { Config } from './services/config';
import { App } from './app';

Config.init()
    .then(() => {
        document.title = config.title;
    }).then(() => {
        ReactDOM.render(<App />, document.getElementById('app'))
    });
