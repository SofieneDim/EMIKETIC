import { MESSAGE_SHOW, MESSAGE_HIDE } from '../constants/ActionTypes';

// Initial State
export const commonInitialState = {
    message: {
        text: null,
        open: false
    }
}

/**
 * Show / Hide common message
 * @param  {} state
 * @param  {} action
 */
export default (state = commonInitialState, action) => {
    switch (action.type) {
        case MESSAGE_SHOW:
            return {
                ...state,
                message: {
                    text: action.message,
                    open: true
                }
            }

        case MESSAGE_HIDE:
            return {
                ...state,
                message: {
                    text: null,
                    open: false
                }
            }

        default:
            return state
    }
};
