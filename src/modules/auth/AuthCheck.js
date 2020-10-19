// Imports
import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// App Imports
import user from '../../setup/routes/user'
import admin from '../../setup/routes/admin'

// Component
const AuthCheck = (props) => (
    props.user.isAuthenticated ?
        (props.user.isAdmin ?
            <Redirect to={admin.programs.path} /> :
            <Redirect to={user.ressourcerie.path} />) : ''
)

// Component Properties
AuthCheck.propTypes = {
    user: PropTypes.object.isRequired
}

// Component State
function authCheckState(state) {
    return {
        user: state.authState
    }
}

export default connect(authCheckState, {})(AuthCheck)