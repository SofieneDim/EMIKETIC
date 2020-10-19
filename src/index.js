// Imports
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// App Imports
import { store } from './setup/store';
import { setUserData, setLocalStorageData } from './modules/common/user-auth/store/actions'
// import { messageShow } from './modules/common/store/actions'

import 'semantic-ui-css/semantic.min.css';
import './index.scss';
import App from './App';
import Container from './modules/common/container/Container';

// User Authentication
const token = window.localStorage.getItem('token')
if (token && token !== 'undefined' && token !== '') {
    const user = JSON.parse(window.localStorage.getItem('user'))
    if (user) {
        // Dispatch action
        store.dispatch(setUserData(token, user))
        setLocalStorageData(token, user)
    }
}

// Test commun message show -To Delete after
// store.dispatch(messageShow('Welcome to react boilerplate !'))

render(
    <Provider store={store}>
        <Router>
            <Container
                Child={App}
            />
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
