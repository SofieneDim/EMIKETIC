import api from '../../../common/api';


const getSeriesList = (pagesNumber) => {
    return api.get(`/series/${pagesNumber}`);
};

const getSerieBySearch = data => {
    const params = {
        title: data.title,
    }
    if (data.date) {
        const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(new Date(data.date))
        params.date = year
    }
    return api.get('/series/search', { params });
};

export default {
    getSeriesList,
    getSerieBySearch,
};
