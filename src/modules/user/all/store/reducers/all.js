import { RECEIVE_ALL, ALL_RECEIVE_SEARCH_RESULT, SET_ALL_LOADING_VALUE } from '../constants/ActionTypes';

/**
 * Update all list state
 * @param  {} state
 * @param  {} action
 */
const allInitialState = {
    allItems: {},
    isLoading: false,
    searchResult: [],
}

const all = (state = allInitialState, action) => {
    switch (action.type) {
        case RECEIVE_ALL:
            return { ...state, allItems: action.data };
        case SET_ALL_LOADING_VALUE:
            return { ...state, isLoading: action.data };
        case ALL_RECEIVE_SEARCH_RESULT:
            return { ...state, searchResult: action.data };
        default:
            return state;
    }
};

export default all;

export const getAll = (state) => state;
