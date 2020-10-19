// Imports
import React from 'react'
import './scss/HorizentalMenu.scss'

import { customBlue } from '../../../ui/common/colors'

const horizentalMenuItem = (props) => {
    return (
        <div
            onClick={props.clickHandler}
            id={props.active ? "horizental-menu-item-active" : "horizental-menu-item"}
            style={{
                borderBottom: props.active && `3px solid ${customBlue}`,
            }}
        >
            <label
                style={{
                    cursor: "pointer",
                    color: props.active ? "white" : "rgb(167, 164, 164)"
                }}
            >
                {props.title}
            </label>
            <div ></div>
        </div >
    )
}


export default horizentalMenuItem
