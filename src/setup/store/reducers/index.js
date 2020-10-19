import { combineReducers } from 'redux';
import commonMessage from '../../../modules/common/store/reducers/common-message'
import authState from '../../../modules/common/user-auth/store/reducers/user-auth'
import series from '../../../modules/user/series/store/reducers/series'
import movies from '../../../modules/user/movies/store/reducers/movies'
import all from '../../../modules/user/all/store/reducers/all'

const appReducer = combineReducers({
    commonMessage,
    authState,
    series,
    movies,
    all,
});

export default appReducer;
