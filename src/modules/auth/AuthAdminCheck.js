// Imports
import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// App Imports
import user from '../../setup/routes/user'

// Component
const AuthAdminCheck = (props) => (
    props.user.isAuthenticated && props.user.details.role === 'ADMIN' ? '' :
        <Redirect to={user.ressourcerie.path} />
)

// Component Properties
AuthAdminCheck.propTypes = {
    user: PropTypes.object.isRequired
}

// Component State
function authAdminCheckState(state) {
    return {
        user: state.authState
    }
}

export default connect(authAdminCheckState, {})(AuthAdminCheck)
