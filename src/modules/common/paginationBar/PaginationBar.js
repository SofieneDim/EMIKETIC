import React from 'react';
import './PaginationBar.scss';

import { customBlue } from '../../../ui/common/colors'

const PaginationBar = props => {
    if (!props.pagesNumber) return null;
    const pages = [];
    for (let i = 1; i <= props.pagesNumber; i++) {
        pages.push(
            <button
                key={i}
                className={props.currentPage === i ? "active" : "null"}
                style={{
                    color: props.currentPage !== i && customBlue,
                    backgroundColor: props.currentPage === i && customBlue,
                }}
                onClick={() => props.changePage(i)}
            >
                {i}
            </button>
        );
    };

    return (
        <div className="pagination">
            <div>
                <button
                    style={{ color: customBlue }}
                    onClick={() => props.changePage("prev")}
                    disabled={props.currentPage === 1}
                >
                    &laquo;
            </button>
                {pages}
                <button
                    style={{ color: customBlue }}
                    onClick={() => props.changePage("next")}
                    disabled={props.currentPage === props.pagesNumber}
                >
                    &raquo;
            </button>
            </div>
        </div>
    );
};

export default PaginationBar;