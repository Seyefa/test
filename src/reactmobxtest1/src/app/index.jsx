import React from 'react';
import Fa from 'react-fontawesome';

import globalStyles from '../styles/styles.scss';
import styles from './styles.scss';

import Value from '../components/Value';

class App extends React.Component {
    render() {
        return (
            <div>
                <Fa cssModule={globalStyles} name="check" className={globalStyles.green} />
                <Value value={123} />
            </div>
        );
    }
}

export default App;