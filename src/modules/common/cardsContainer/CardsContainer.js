import React from 'react'
import Card from '../../../ui/card'
import PaginationBar from '../paginationBar/PaginationBar'

const CardsContainer = props => {
    const cards = props.items.map((item, index) =>
        <div
            key={index}
            style={{
                display: "flex",
                justifyContent: "space-around",
            }}
            className="col-lg-3 col-md-4 col-sm-4 col-xs-6 col-xs-12"
        >
            <Card item={item} />
        </div>
    )

    return (
        <React.Fragment>
            { cards}
            <PaginationBar
                pagesNumber={props.pagesNumber}
                currentPage={props.currentPage}
                changePage={props.changePage}
            />
        </React.Fragment>
    )
}

export default CardsContainer