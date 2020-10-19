import * as types from '../constants/ActionTypes'
import allServ from '../../api/all'

/**
 * Receive all
 * @param  {} all
 */
const receiveAll = (all) => ({
    type: types.RECEIVE_ALL,
    data: all
});

/**
 * Receive loading value
 * @param  {} value
 */
const toggleLoaing = (value) => ({
    type: types.SET_ALL_LOADING_VALUE,
    data: value
});

/**
 * Get all items
 * @param  {} pageNumber
 */
export const getAllItems = (pageNumber, isLoading = true) => (dispatch) => {
    dispatch(toggleLoaing(isLoading))
    allServ.getAllList(pageNumber).then((responce) => {
        dispatch(receiveAll(responce.data));
        dispatch(toggleLoaing(false))
    });
};

/**
 * Receive allSearchResult
 * @param  {} allSearchResult
 */
const receiveSearchResult = (allSearchResult) => {
    return {
        type: types.ALL_RECEIVE_SEARCH_RESULT,
        data: allSearchResult
    }
};


/**
 * Search by title
 * @param  {} data
 */
export const getAnyBySearch = data => (dispatch, isLoading = true) => {
    dispatch(toggleLoaing(isLoading));
    allServ.getAnyBySearch(data).then((responce) => {
        if (responce.data.Error) return data.error(responce.data.Error)
        responce.data.length
            ? dispatch(receiveSearchResult(responce.data))
            : dispatch(receiveSearchResult([0]));
        dispatch(toggleLoaing(false));
    });
};

/**
 * Reset all search value
 */
export const resetSearch = () => (dispatch) => {
    dispatch(receiveSearchResult([]));
    document.getElementById("search-title-input").value = "";
    document.getElementById("search-date-input").value = null;
};