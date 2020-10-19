// Imports
import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'semantic-ui-react'

// UI Imports
// EXAMPLE OF UI COMPONENT USING SEMANTIC-UI -- TO EDIT BASED ON PROJECT

// Component
const ButtonApp = (props) => {
    const { children, type, disabled, ...other } = props

    return (
        <Button content='Click Here' type={type} disabled={disabled} {...other} />
    )
}

// Component Properties
ButtonApp.propTypes = {
    type: PropTypes.string,
    disabled: PropTypes.bool
}

ButtonApp.defaultProps = {
    type: 'button',
    disabled: false
}

export default ButtonApp