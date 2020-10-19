import { RECEIVE_MOVIES, MOVIES_RECEIVE_SEARCH_RESULT, SET_MOVIES_LOADING_VALUE } from '../constants/ActionTypes';

/**
 * Update movies list state
 * @param  {} state
 * @param  {} action
 */
const moviesInitialState = {
    movies: {},
    isLoading: false,
    searchResult: [],
}

const movies = (state = moviesInitialState, action) => {
    switch (action.type) {
        case RECEIVE_MOVIES:
            return { ...state, movies: action.data };
        case SET_MOVIES_LOADING_VALUE:
            return { ...state, isLoading: action.data };
        case MOVIES_RECEIVE_SEARCH_RESULT:
            return { ...state, searchResult: action.data };
        default:
            return state;
    }
};

export default movies;

export const getMovies = (state) => state;
