// Imports
import React from 'react'
import './scss/MenuItem.scss'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { customBlue } from '../../../ui/common/colors'

// UI Imports TO - DO

// Component
const MenuItem = (props) => {
    const { children, to, active, style, section } = props

    const isActiveRoute = () => {
        const currentSection = props.location.pathname.split('/')[1]
        return (currentSection === to.split('/')[1] && currentSection === section)
            || props.location.pathname === to
            || active
    }

    return (
        <Link
            to={to}
            id="menu-item-link"
            style={
                Object.assign({
                    padding: '0.6em 1em',
                    textTransform: 'uppercase',
                    color: '#fff'
                }, isActiveRoute() ? {
                    color: customBlue,
                    textDecoration: "none"
                } : style)
            }
        >
            {children}
        </Link>
    )
}

// Component Properties
MenuItem.propTypes = {
    to: PropTypes.string.isRequired,
    type: PropTypes.string,
    active: PropTypes.bool,
    style: PropTypes.object
}
MenuItem.defaultProps = {
    type: 'secondary',
    active: false,
    style: {}
}

export default withRouter(MenuItem)