import React from 'react'

import Card from '../../../ui/card'
import NotFound from '../../../ui/notFoundMessage/notFound';
import ResetButton from '../../../ui/resetButton';

const SearchResult = props =>
    <div>

        <div className="col-md-12">
            <ResetButton reset={props.resetSearch} />
        </div>

        {
            // check if there is an empty search result
            props.searchResult[0] === 0
                ? <div className="col-md-12"><NotFound /></div>
                : <div
                    className="col-md-12"
                    style={{
                        left: "40%",
                        marginTop: "40px",
                        width: "min-content",
                        position: "absolute",
                    }}>
                    <Card
                        item={props.searchResult[0]}
                    />
                </div>
        }
    </div >


export default SearchResult