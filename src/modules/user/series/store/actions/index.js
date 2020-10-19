import * as types from '../constants/ActionTypes'
import seriesServ from '../../api/series'

/**
 * Receive series
 * @param  {} series
 */
const receiveSeries = (series) => ({
    type: types.RECEIVE_SERIES,
    data: series
});

/**
 * Receive loading value
 * @param  {} value
 */
const toggleLoaing = (value) => ({
    type: types.SET_SERIES_LOADING_VALUE,
    data: value
});

/**
 * Get all series
 */
export const getAllSeries = (pagesNumber, isLoading = true) => (dispatch) => {
    dispatch(toggleLoaing(isLoading))
    seriesServ.getSeriesList(pagesNumber).then((responce) => {
        dispatch(receiveSeries(responce.data));
        dispatch(toggleLoaing(false))
    });
};

/**
 * Receive seriesSearchResult
 * @param  {} seriesSearchResult
 */
const receiveSearchResult = (seriesSearchResult) => {
    return {
        type: types.SERIES_RECEIVE_SEARCH_RESULT,
        data: seriesSearchResult
    }
};

/**
 * Search serie by title
 */
export const getSerieBySearch = data => (dispatch, isLoading = true) => {
    dispatch(toggleLoaing(isLoading));
    seriesServ.getSerieBySearch(data).then((responce) => {
        if (responce.data.Error) return data.error(responce.data.Error)
        responce.data.length
            ? dispatch(receiveSearchResult(responce.data))
            : dispatch(receiveSearchResult([0]));
        dispatch(toggleLoaing(false));
    });
};

/**
 * Reset series search value
 */
export const resetSearch = () => (dispatch) => {
    dispatch(receiveSearchResult([]));
    document.getElementById("search-title-input").value = "";
    document.getElementById("search-date-input").value = null;
};
