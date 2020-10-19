import api from '../../../common/api';

/**
 * Get all list
 */
const getAllList = (pageNumber) => {
    return api.get(`/all/${pageNumber}`);
};

/**
 * Get item by search
 */
const getAnyBySearch = data => {
    const params = {
        title: data.title,
        date: null
    }
    if (data.date) {
        const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(new Date(data.date))
        params.date = year
    }
    return api.get('/all/search', { params });
};

export default {
    getAllList,
    getAnyBySearch,
};
