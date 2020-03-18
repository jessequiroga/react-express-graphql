import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import AppContainer from './core/layouts/app-container/AppContainer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <AppContainer />,
    document.getElementById('root')
);

serviceWorker.unregister();
