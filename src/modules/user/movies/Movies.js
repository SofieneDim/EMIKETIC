import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAllMovies, resetSearch } from './store/actions';
import { getMovies } from './store/reducers/movies';
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
        this.props.getAllMovies(this.state.currentPage);
    }

    changePage = newPage => {
        const currentPage = getNewPageNumber(newPage, this.state.currentPage)
        this.setState({ currentPage })
        this.props.getAllMovies(currentPage)
    }

    render() {
        const { searchResult, movies } = this.props.movies
        let finalMovies = []
        if (!isEmpty(movies)) finalMovies = movies.content
        if (searchResult.length) finalMovies = searchResult

        let pagesNumber = 0
        if (finalMovies.length && movies.itemsNumber && !searchResult.length)
            pagesNumber = getNumberOfPages(movies.itemsNumber)

        return this.props.movies.isLoading
            ? <Loader />
            : searchResult.length
                ? <SearchResult
                    resetSearch={this.props.resetSearch}
                    searchResult={searchResult}
                />
                : <div className="col-md-12 row cards-wrapper">
                    <CardsContainer
                        items={finalMovies}
                        pagesNumber={pagesNumber}
                        currentPage={this.state.currentPage}
                        changePage={this.changePage}
                    />
                </div>
    }
}
// Get data from reducers
const mapStateToProps = (state) => ({
    movies: getMovies(state.movies)
});


export default connect(mapStateToProps, { getAllMovies, resetSearch })(Programs);
