// Imports
import React from 'react'
import './scss/Header.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// UI Imports TO - DO

// App Imports 
import user from '../../../setup/routes/user'
import userAuth from '../../../setup/routes/user-auth'
import Menu from './Menu'
import MenuItem from './MenuItem'

// Component
const Header = (props) => {
    return (
        <header style={{
            padding: '0 2em'
        }}
            className="header"
        >
            <div style={{ marginTop: '1.5em' }}>
                <div>
                    {/* Left menu */}
                    <Menu
                        id="header-menu"
                        style={{ float: 'left', marginTop: '0.5em' }}
                    >
                        <MenuItem to={user.all.path}>All</MenuItem>
                        <MenuItem to={user.movies.path}>Movies</MenuItem>
                        <MenuItem to={user.series.path}>Series</MenuItem>
                    </Menu>
                    {/* Rigth menu */}
                    <div style={{ textAlign: 'right' }}>
                        <Menu id="header-signup-button">
                            <MenuItem to={userAuth.signup.path}>Signup</MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>
        </header>
    )
}

// Component Properties
Header.propTypes = {
    user: PropTypes.object.isRequired
}

// Component State
function headerState(state) {
    return {
        user: state.authState
    }
}

export default withRouter(connect(headerState, {})(Header))
