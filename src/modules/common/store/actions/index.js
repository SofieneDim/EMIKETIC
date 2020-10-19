import * as types from '../constants/ActionTypes'

/**
 * Show common message
 * @param {*} message : message
 */
export function messageShow(message) {
    return { type: types.MESSAGE_SHOW, message }
}

/**
 * Hide commun message
 */
export function messageHide() {
    return { type: types.MESSAGE_HIDE }
}