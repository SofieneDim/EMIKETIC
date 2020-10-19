import React from 'react'

import undoIcon from '../../assets/icons/undo-64.png'

const ResetButton = props =>
    <button
        onClick={props.reset}
        style={{
            float: "right",
            height: "50px",
            width: "50px",
            border: "none",
            outline: "none",
            margin: "50px 90px 0",
            backgroundSize: "cover",
            backgroundColor: "transparent",
            backgroundImage: `url(${undoIcon})`,
        }}
    >
    </button>

export default ResetButton