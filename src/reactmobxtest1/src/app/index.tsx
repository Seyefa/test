import * as React from 'react';
import CSSModules from 'react-css-modules';

import { RouteConfig } from 'react-router';
import { Link, IndexLink } from 'react-router';
import { Router, hashHistory } from 'react-router';

import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

import { Home } from '../views/home';
import { Search } from '../views/search';

import styles from './styles.scss';

const App2 = CSSModules<React.StatelessComponent<{}>>(props => {
    return (
        <div>
            <Navbar fixedTop fluid collapseOnSelect>
                <Navbar.Collapse>
                    <Nav>
                        <li><IndexLink to="/" activeClassName="active">Ärende</IndexLink></li>
                        <li><Link to="/sok" activeClassName="active">Sök</Link></li>
                    </Nav>
                    <Nav pullRight>
                        <Navbar.Text>Text</Navbar.Text>
                        <NavDropdown id="basic-nav-dropdown" title="Dropdown">
                            <MenuItem>Action</MenuItem>
                            <MenuItem>Another action</MenuItem>
                            <MenuItem>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="container-fluid" styleName="content">
                {props.children}
            </div>
        </div>
    );
}, styles);

export const App: React.StatelessComponent<{}> = () => {
    let routes: RouteConfig = {
        path: '/',
        component: App2,
        indexRoute: { component: Home },
        childRoutes: [
            { path: "sok", component: Search }
        ]
    };

    return (
        <Router history={hashHistory} routes={routes} />
    );
}
