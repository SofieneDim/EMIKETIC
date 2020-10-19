import React from 'react'
import './NeonButton.scss'

const NeonButton = props =>
    <button
        id="search-neon-button"
        onClick={props.clicked}
        type="submit"
    >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {props.title}
    </button>

export default NeonButton