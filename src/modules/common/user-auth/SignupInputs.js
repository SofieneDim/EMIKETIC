import React from 'react'

import formInputsSetup from './FormInputsSetup';

export default props => formInputsSetup.map(item =>
    <div className="col-md-12" key={item.id}>
        <label style={item.label.style}>{item.label.title}</label>
        <input
            type={item.input.type}
            value={props.state[item.name]}
            style={item.input.style}
            className={item.input.className}
            placeholder={item.input.placeholder}
            onChange={e => props.inputsChange(e, item.name)}
            required
        />
    </div>
)