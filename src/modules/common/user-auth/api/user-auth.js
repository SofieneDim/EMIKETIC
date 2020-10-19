import api from '../../../common/api';
import { signupSuccessfulMessage } from '../utils/message';

/**
 * Login
 * @param {*} loginData 
 */
const login = (loginData) => {
    return api.post('/api/login', loginData);
};


/**
 * Signup
 * @param {*} signupData 
 */
const signup = (signupData) => {
    console.log("Sginup data from api:", signupData);
    return new Promise(
        (resolve) => setTimeout(() =>
            resolve(signupSuccessfulMessage)
            , 500)
    )
};


export default {
    login,
    signup
};
