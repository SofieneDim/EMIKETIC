// App Imports
import admin from './admin'
import user from './user'
import authRoutes from './user-auth'

// Combined routes
export const routes = Object.assign(admin, user, authRoutes)

