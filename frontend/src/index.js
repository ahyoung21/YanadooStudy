import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import './common/common.scss';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
