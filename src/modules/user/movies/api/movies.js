import api from '../../../common/api';

/**
 * Get series list
 */

const getMoviesList = (pageNumber) => {
    return api.get(`/movies/${pageNumber}`);
};

const getMovieBySearch = data => {
    const params = {
        title: data.title,
        date: null
    }
    if (data.date) {
        const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(new Date(data.date))
        params.date = year
    }
    return api.get('/movies/search', { params });
};

export default {
    getMoviesList,
    getMovieBySearch,
};
