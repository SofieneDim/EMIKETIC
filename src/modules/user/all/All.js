import React, { Component } from 'react';
import { connect } from 'react-redux';

import { isEmpty, getNewPageNumber, getNumberOfPages } from '../../../setup/helpers';

import { getAllItems, resetSearch } from './store/actions';
import { getAll } from './store/reducers/all';

import CardsContainer from '../../common/cardsContainer/CardsContainer';
import Loader from '../../../ui/loader';
import SearchResult from '../../common/searchResult/SearchResult';

class Programs extends Component {

    state = {
        currentPage: 1,
    }

    constructor(props) {
        super(props);
        this.props.getAllItems(this.state.currentPage);
    }

    changePage = newPage => {
        const currentPage = getNewPageNumber(newPage, this.state.currentPage)
        this.setState({ currentPage })
        this.props.getAllItems(currentPage)
    }
    render() {
        const { searchResult, allItems } = this.props.allItems
        let finalData = []
        if (!isEmpty(allItems)) finalData = allItems.content
        if (searchResult.length) finalData = searchResult

        let pagesNumber = 0
        if (finalData.length && allItems.itemsNumber && !searchResult.length)
            pagesNumber = getNumberOfPages(allItems.itemsNumber)

        return this.props.allItems.isLoading
            ? <Loader />
            : searchResult.length
                ? <SearchResult
                    resetSearch={this.props.resetSearch}
                    searchResult={searchResult}
                />
                : <div className="col-md-12 row cards-wrapper">
                    <CardsContainer
                        items={finalData}
                        pagesNumber={pagesNumber}
                        currentPage={this.state.currentPage}
                        changePage={this.changePage}
                    />
                </div>
    }
}

// Get data from reducers
const mapStateToProps = (state) => ({
    allItems: getAll(state.all)
});


export default connect(mapStateToProps, { getAllItems, resetSearch })(Programs);
