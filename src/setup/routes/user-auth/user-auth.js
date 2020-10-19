// App Imports
import Login from '../../../modules/common/user-auth/Login'
import Signup from '../../../modules/common/user-auth/Signup'

// User - auth routes
export const login = {
    path: '/login',
    component: Login
}

export const signup = {
    path: '/signup',
    component: Signup
}
