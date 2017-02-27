import * as React from 'react';
import CSSModules from 'react-css-modules';

import { RouteConfig } from 'react-router';
import { Link, IndexLink } from 'react-router';
import { Router, hashHistory } from 'react-router';

import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

import { Home } from '../views/home';
import { Search } from '../views/search';

import styles from './styles.scss';

@CSSModules(styles)
class App2 extends React.Component<{}, {}> {
    public render() {
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
                    {this.props.children}
                    <div style={{ marginTop: '100px' }} styleName="img" />
                    <img src='./images/rxslvkontroll72.png' />
                </div>
            </div>
        );
    }
}

export class App extends React.Component<{}, {}> {

    private routes: RouteConfig;

    constructor() {
        super();
        this.routes = {
            path: '/',
            component: App2,
            indexRoute: { component: Home },
            childRoutes: [
                { path: "sok", component: Search }
            ]
        };
    }

    public render() {
        return (
            <Router history={hashHistory} routes={this.routes} />
        );
    }
}
