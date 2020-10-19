// App Imports
import Movies from '../../../modules/user/movies/Movies'

// User all routes
export const movies = {
    path: '/movies',
    component: Movies,
    auth: false
}