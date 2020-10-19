import { compose } from 'redux';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { logger } from 'redux-logger';

import appReducer from './reducers';

// Root Reducer
export const rootReducer = (state, action) => {
    if (action.type === 'RESET') {
        state = undefined
    }

    return appReducer(state, action)
}

// REDUX_DEVTOOLS_EXTENSION
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store
export const store = createStore(
    rootReducer,

    composeEnhancers(
        applyMiddleware(thunk),
        applyMiddleware(logger)
    )
)

