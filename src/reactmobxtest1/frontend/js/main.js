import React from 'react';
import { render } from 'react-dom';
import App from './App';
import State from './State';

render(<App state={new State()}/>, document.getElementById('app'));
