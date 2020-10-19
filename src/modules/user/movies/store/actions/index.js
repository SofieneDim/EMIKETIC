import * as types from '../constants/ActionTypes'
import moviesServ from '../../api/movies'

/**
 * Receive movies
 * @param  {} movies
 */
const receiveMovies = (movies) => ({
    type: types.RECEIVE_MOVIES,
    data: movies
});

/**
 * Receive loading value
 * @param  {} value
 */
const toggleLoaing = (value) => ({
    type: types.SET_MOVIES_LOADING_VALUE,
    data: value
});

/**
 * Get all movies
 */
export const getAllMovies = (pageNumber, isLoading = true) => (dispatch) => {
    dispatch(toggleLoaing(isLoading))
    moviesServ.getMoviesList(pageNumber).then((responce) => {
        dispatch(receiveMovies(responce.data));
        dispatch(toggleLoaing(false))
    });
};

/**
 * Receive moviesSearchResult
 * @param  {} moviesSearchResult
 */
const receiveSearchResult = (moviesSearchResult) => {
    return {
        type: types.MOVIES_RECEIVE_SEARCH_RESULT,
        data: moviesSearchResult
    }
};


/**
 * Search by title and date?
 */
export const getMovieBySearch = data => (dispatch, isLoading = true) => {
    dispatch(toggleLoaing(isLoading));
    moviesServ.getMovieBySearch(data).then((responce) => {
        if (responce.data.Error) return data.error(responce.data.Error)
        responce.data.length
            ? dispatch(receiveSearchResult(responce.data))
            : dispatch(receiveSearchResult([0]));
        dispatch(toggleLoaing(false));
    });
};

/**
 * Reset movies search value
 */
export const resetSearch = () => (dispatch) => {
    dispatch(receiveSearchResult([]));
    document.getElementById("search-title-input").value = "";
    document.getElementById("search-date-input").value = null;
};
