import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './App';
import State from './State';

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
        </Route>
    </Router>
), document.getElementById('app'));
