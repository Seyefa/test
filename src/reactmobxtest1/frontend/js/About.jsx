import React from 'react';
import { Link } from 'react-router';

export default class About extends React.Component {

    render() {
        return (
            <div>
                <div>About</div>
                <Link to="/about/about2">About2</Link>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}