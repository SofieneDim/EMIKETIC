import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {

    constructor(props) {
        console.log('Login section laoded');

        super(props);
    }

    render() {
        return (
            <div>
                Hellow Login Container
            </div>
        )
    }
}

// Get data from reducers
// const mapStateToProps = (state) => ({
// });

export default connect()(Login);
