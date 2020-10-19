import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signup } from './store/actions';
import { messageShow, messageHide } from '../../common/store/actions'
import { store } from '../../../setup/store';
import { getAuthState } from './store/reducers/user-auth';

import SignupInputs from './SignupInputs';
import * as helpers from './utils/helpers'
import Loader from '../../../ui/loader';

class Signup extends Component {

    state = {
        fullName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
    }

    submitHandler = event => {
        event.preventDefault()
        const response = helpers.checkInputs({ ...this.state })
        if (!response.valid) {
            store.dispatch(messageShow(response.message))
            return setTimeout(() => {
                store.dispatch(messageHide())
            }, 5000);
        }
        const data = {
            ...this.state,
            success: message => {
                store.dispatch(messageShow(message))
                this.setState({
                    fullName: "",
                    email: "",
                    password: "",
                    passwordConfirmation: "",
                })
            }
        }
        this.props.signup(data)
    }

    inputsChangeHandler = (event, name) => {
        const value = {}
        value[name] = event.target.value
        this.setState(value)
    }

    render() {
        const titleStyle = {
            width: "100%",
            color: "white",
            fontSize: "30px",
            marginTop: "20px",
            textAlign: "center",
        }
        const buttonStyle = {
            width: "100%",
            margin: "30px 0 30px 0",
        }

        return this.props.authState.isLoading
            ? <Loader />
            : <form onSubmit={this.submitHandler} style={{ marginLeft: '30px' }} className="row">
                <div className="row">
                    <div className="col-md-2" />
                    <div className="col-md-8 row">
                        <div className="col-md-12">
                            <label style={titleStyle}>Signup Form</label>
                        </div>
                        <SignupInputs
                            state={this.state}
                            inputsChange={this.inputsChangeHandler}
                        />
                        <div className="col-md-3" />
                        <div className="col-md-6">
                            <button className="btn" type="submit" style={buttonStyle}>
                                Submit
                        </button>
                        </div>
                        <div className="col-md-3" />
                    </div>
                    <div className="col-md-2" />
                </div>
            </form>
    }
}

// Get auth state from reducers
const mapStateToProps = (state) => ({
    authState: getAuthState(state.authState)
});

export default connect(mapStateToProps, { signup })(Signup);