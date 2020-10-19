import React from 'react'

import './Container.scss'

const Container = props => {
    const { Child } = props


    return (
        <div id="wrapper">
            <div className="row" id="sub-wrapper" style={{ width: "100%" }}>
                <div className="col-md-1"></div>
                <div
                    className="col-md-10"
                    id="body-container"
                    style={{
                        border: "solid 20px black",
                        borderRadius: "40px",
                        height: "600px",
                        overflowY: "scroll",
                        scrollBehavior: "smooth",
                    }}>
                    <Child />
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    )
}

export default Container