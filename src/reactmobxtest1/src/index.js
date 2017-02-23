import React from 'react';
import ReactDOM from 'react-dom';

import { Config } from './services/config';
import { App } from './app';

async function Run() {
    await Config.init();

    document.title = window.config.title;

    let destination = document.getElementById('app'),
        rootComponent = App;
    ReactDOM.render(React.createElement(rootComponent), destination);
}

Run();