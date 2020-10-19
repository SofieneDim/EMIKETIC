// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

// App Imports
import userAuthRoutes from '../../setup/routes/user-auth'

// Component
const RoutePrivate = (props) => (
    <Switch>
        {props.user.isAuthenticated
            ? props.role && props.user.details.role === props.role
                ? <Route {...props} component={props.component} />
                : <Redirect to={userAuthRoutes.login.path} />
            : <Redirect to={userAuthRoutes.login.path} />
        }
    </Switch>
)

// Component Properties
RoutePrivate.propTypes = {
    user: PropTypes.object.isRequired,
}

// Component State
function routePrivateState(state) {
    return {
        user: state.authState
    }
}

export default connect(routePrivateState, {})(RoutePrivate);
