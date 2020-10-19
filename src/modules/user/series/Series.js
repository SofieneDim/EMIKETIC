import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAllSeries, resetSearch } from './store/actions';
import { getSeries } from './store/reducers/series';
import { isEmpty, getNewPageNumber, getNumberOfPages } from '../../../setup/helpers';

import CardsContainer from '../../common/cardsContainer/CardsContainer';
import Loader from '../../../ui/loader';
import SearchResult from '../../common/searchResult/SearchResult';

class Programs extends Component {

    state = {
        currentPage: 1,
    }

    constructor(props) {
        super(props);
        this.props.getAllSeries(this.state.currentPage);
    }

    changePage = newPage => {
        const currentPage = getNewPageNumber(newPage, this.state.currentPage)
        this.setState({ currentPage })
        this.props.getAllSeries(currentPage)
    }

    render() {
        const { searchResult, series } = this.props.series
        let finalSeries = []
        if (!isEmpty(series)) finalSeries = series.content
        if (searchResult.length) finalSeries = searchResult

        let pagesNumber = 0
        if (finalSeries.length && series.itemsNumber && !searchResult.length)
            pagesNumber = getNumberOfPages(series.itemsNumber)

        return this.props.series.isLoading
            ? <Loader />
            : searchResult.length
                ? <SearchResult
                    resetSearch={this.props.resetSearch}
                    searchResult={searchResult}
                />
                : <div className="col-md-12 row cards-wrapper">
                    <CardsContainer
                        items={finalSeries}
                        pagesNumber={pagesNumber}
                        currentPage={this.state.currentPage}
                        changePage={this.changePage}
                    />
                </div>



    }
}
// Get data from reducers
const mapStateToProps = (state) => ({
    series: getSeries(state.series)
});


export default connect(mapStateToProps, { getAllSeries, resetSearch })(Programs);
