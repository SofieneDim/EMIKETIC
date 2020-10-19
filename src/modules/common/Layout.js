// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// UI Imports

// App Imports
import Header from './header/Header'
import { renderIf } from '../../setup/helpers'
import { messageHide } from '../common/store/actions'
import HorizentalMenu from './horizentalMenu/HorizentalMenu'
import SideMenu from './sideMenu/SideMenu'

class Layout extends PureComponent {

    render() {
        const { children } = this.props

        return (
            <div>
                <div className="row">
                    <Header />
                    <div className="col-md-10">
                        <HorizentalMenu />
                        <section>
                            {children}
                        </section>
                    </div>
                    <div className="col-md-2">
                        <SideMenu />
                    </div>
                </div>

                {/* Messages */}
                {renderIf(this.props.commonMessage.message.open, () => (
                    <div style={{
                        position: 'fixed',
                        right: '2em',
                        top: '2em',
                        border: '2px solid black',
                        borderRadius: '15px',
                        maxWidth: '30em',
                        backgroundColor: "white",
                    }}>
                        <span style={{
                            float: 'left',
                            padding: '1em 0em 1em 2em',
                            marginRight: '5em'
                        }}>{this.props.commonMessage.message.text}</span>

                        <span
                            style={{
                                position: 'absolute',
                                padding: '1em',
                                cursor: 'pointer',
                                right: '0.5em',
                                top: 0,
                                color: 'green',
                            }}
                            onClick={this.props.messageHide}
                        >
                            close
                        </span>
                    </div>
                ))}
            </div>
        )
    }
}

// Component Properties
Layout.propTypes = {
    commonMessage: PropTypes.object.isRequired,
    messageHide: PropTypes.func.isRequired
}

// Component State
function commonState(state) {
    return {
        commonMessage: state.commonMessage
    }
}

export default connect(commonState, { messageHide })(Layout)
