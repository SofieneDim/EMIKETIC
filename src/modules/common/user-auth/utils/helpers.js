import * as messages from './message'

export const checkInputs = inputsValues => {
    const response = {
        valid: true,
        message: "",
    }
    for (let fieldName in inputsValues) {
        const isValid = validator(fieldName, inputsValues[fieldName])
        if (!isValid) {
            response.valid = false
            response.message = getMessage(fieldName)
            return response
        }
    }
    if (inputsValues.password !== inputsValues.passwordConfirmation) {
        response.valid = false
        response.message = messages.passwordMatchErrorMessage
    }
    return response
}

const validator = (fieldName, value) => {
    switch (fieldName) {
        case 'fullName':
            return value.length >= 6;
        case 'email':
            return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
        case 'password':
            return value.length >= 4;
        case 'passwordConfirmation':
            return true;
        default:
            break;
    }
}

const getMessage = fieldName => {
    switch (fieldName) {
        case 'fullName':
            return messages.fullNameErrorMessage;
        case 'email':
            return messages.emailErrorMessage;
        case 'password':
            return messages.passwordErrorMessage;
        default:
            break;
    }
}