import { RECEIVE_SERIES, SERIES_RECEIVE_SEARCH_RESULT, SET_SERIES_LOADING_VALUE } from '../constants/ActionTypes';

/**
 * Update series list state
 * @param  {} state
 * @param  {} action
 */
const seriesInitialState = {
    series: {},
    isLoading: false,
    searchResult: [],
}

const series = (state = seriesInitialState, action) => {
    switch (action.type) {
        case RECEIVE_SERIES:
            return { ...state, series: action.data };
        case SET_SERIES_LOADING_VALUE:
            return { ...state, isLoading: action.data };
        case SERIES_RECEIVE_SEARCH_RESULT:
            return { ...state, searchResult: action.data };
        default:
            return state;
    }
};

export default series;

export const getSeries = (state) => state;
