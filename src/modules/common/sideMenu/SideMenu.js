import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getSerieBySearch } from '../../user/series/store/actions'
import { getMovieBySearch } from '../../user/movies/store/actions'
import { getAnyBySearch } from '../../user/all/store/actions'
import { messageShow, messageHide } from '../../common/store/actions'
import { store } from '../../../setup/store';

import NeonButton from '../../../ui/neonButton'

const SideMenu = props => {
    const { pathname } = props.location

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");

    const searchHandler = event => {
        event.preventDefault()
        const data = {
            title, date,
            error: message => errorHandler(message),
        }
        if (pathname === "/series") return props.getSerieBySearch(data)
        if (pathname === "/movies") return props.getMovieBySearch(data)
        props.getAnyBySearch(data)
    }

    const errorHandler = message => {
        store.dispatch(messageShow(message))
        setTimeout(() => {
            store.dispatch(messageHide())
        }, 5000);
    }

    return (
        <div>
            <label
                style={{
                    color: "grey",
                    width: " 100%",
                    fontSize: "30px",
                    textAlign: "center",
                    paddingBottom: "26px",
                    margin: "50px 0 30px 0",
                    borderBottom: "solid 1px grey",
                }}
            >
                SEARCH
            </label>
            <form onSubmit={searchHandler}>
                <input
                    type="text"
                    id="search-title-input"
                    className="form-control"
                    style={{
                        color: "white",
                        height: "40px",
                        margin: "40px 0 50px 0",
                        border: "1px solid grey",
                        backgroundColor: "transparent",
                    }}
                    placeholder="Title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                />
                <input
                    type="date"
                    id="search-date-input"
                    className="form-control"
                    style={{
                        color: date ? "white" : "grey",
                        height: "40px",
                        margin: "30px 0",
                        border: "1px solid grey",
                        backgroundColor: "transparent",
                    }}
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                />
                <NeonButton title="search" />
            </form>
        </div>
    )
}

export default withRouter(connect(null, { getSerieBySearch, getMovieBySearch, getAnyBySearch })(SideMenu))