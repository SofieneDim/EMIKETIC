import React, { Component } from 'react';
import { connect } from 'react-redux';

class Programs extends Component {

    constructor(props) {
        console.log('Programs section laoded');

        super(props);
    }

    render() {
        return (
            <div>
                Hellow Admin programs Container
            </div>
        )
    }
}

// Get data from reducers
// const mapStateToProps = (state) => ({
// });

export default connect()(Programs);
