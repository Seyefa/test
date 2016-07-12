import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './App';
import About from './About';
import About2 from './About2';

var routes = (
    <Route path="/" component={App}>
        <Route path="about" component={About}>
            <Route path="about2" component={About2} />
        </Route>
    </Route>
);

render((
    <Router history={hashHistory}>
        {routes}
    </Router>
), document.getElementById('app'));
