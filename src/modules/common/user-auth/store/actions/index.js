import axios from 'axios'

import * as types from '../constants/ActionTypes'
import userAuthServ from '../../api/user-auth'

/**
 * Set user
 * @param  {} user
 */
const setUser = (user) => ({
    type: types.SET_USER,
    user
});

/**
 * Set a user after login or using localStorage token
 * Set Authorization header
 */
export const setUserData = (token, user) => (dispatch) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }

    dispatch(setUser(user));
};

/**
 * Set login request (status)
 * @param  {} user
 */
const loginRequest = (isLoading) => ({
    type: types.LOGIN_REQUEST,
    isLoading
});

/**
 * Set login response (error)
 * @param  {} error
 */
const loginResponse = (error) => ({
    type: types.LOGIN_RESPONSE,
    error
});

/**
 * Dispatch Logout
 * @param  {} error
 */
const dispatchLogout = () => ({
    type: types.LOGOUT
});

/**
 * Login
 * @param {*} userCredentials : user credentials
 * @param {boolean} isLoading : loading status
 */
export const login = (userCredentials, isLoading = true) => (dispatch) => {
    dispatch(loginRequest(isLoading));
    userAuthServ.login(userCredentials).then(
        response => {
            let error = ''
            if (response.data.errors && response.data.errors.length > 0) {
                error = response.data.errors[0].message
            } else if (response.data.data.userLogin.token !== '') {
                const token = response.data.data.userLogin.token
                const user = response.data.data.userLogin.user

                dispatch(setUser(token, user));
                setLocalStorageData(token, user);
            }
            dispatch(loginResponse(error))
        },
        error => {
            dispatch(loginResponse('Please try again'))
        }
    )
}

/**
 * Signup
 * @param {*} userData : user data
 */
export const signup = (userData, isLoading = true) => (dispatch) => {
    dispatch(loginRequest(isLoading))
    userAuthServ.signup(userData).then(
        response => {
            console.log('Response from action:', response)
            dispatch(setUser(userData))
            userData.success(response)
            dispatch(loginRequest(false))
        },
        error => {
            dispatch(loginResponse('Please try again'))
            dispatch(loginRequest(false))
        }
    )
}

/**
 * Logout
 */
export const logout = () => (dispatch) => {
    clearLocalStorageData();
    dispatch(dispatchLogout());
}

/**
 * Set user token and info in localStorage
 * @param {*} token : user token
 * @param {*} user : user data
 */
export function setLocalStorageData(token, user) {
    // Update token
    window.localStorage.setItem('token', token)
    window.localStorage.setItem('user', JSON.stringify(user))
}

/**
 * Clear localStorage
 */
export function clearLocalStorageData() {
    // Remove token
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('user')
}

