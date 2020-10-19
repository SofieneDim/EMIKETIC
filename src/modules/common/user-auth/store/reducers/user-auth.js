import { combineReducers } from 'redux';
import { SET_USER, LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT } from '../constants/ActionTypes';
import { isEmpty } from '../../../../../setup/helpers'
import params from '../../../../../setup/config/params.json'

// Initial State
const userInitialState = {
    error: null,
    isLoading: false,
    isAuthenticated: false,
    isAdmin: false,
    isSuperAdmin: false,
    details: null
}

/**
 * Update user auth state
 * @param  {} state: userInitialState
 * @param  {} action
 */
const authState = (state = userInitialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.user),
                isAdmin: action.user.role === params.user.roles.admin,
                isSuperAdmin: action.user.role === params.user.roles.superAdmin,
                details: action.user,
            }

        case LOGIN_REQUEST:
            return {
                ...state,
                error: null,
                isLoading: action.isLoading
            }

        case LOGIN_RESPONSE:
            return {
                ...state,
                error: action.error,
                isLoading: false
            }

        case LOGOUT:
            return {
                ...state,
                error: null,
                isLoading: false,
                isAuthenticated: false,
                details: null
            }

        default:
            return state
    }
};

export default combineReducers({
    authState
});

export const getAuthState = (state) => state.authState;
