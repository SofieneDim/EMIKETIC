// Helpers

/**
 * Render element or component by provided condition
 * @param {*} condition 
 * @param {*} renderFn 
 */
export function renderIf(condition, renderFn) {
    return condition ? renderFn() : null
}

/**
 * Duplicate object
 * @param {*} object 
 */
export function duplicate(object) {
    return Object.assign({}, object)
}

/**
 * Return empty string if value is null
 * @param {*} value 
 */
export function nullToEmptyString(value) {
    return value === null ? '' : value
}


/**
 * Check if object is empty
 * @param {*} obj 
 */
export function isEmpty(obj) {
    let name;
    for (name in obj) {
        if (obj.hasOwnProperty(name)) {
            return false;
        }
    }
    if (obj.constructor !== Object) {
        return false;
    }
    return true;
}


/**
 * Get new page number
 * @param {*} action
 * @param {*} currentPage
 */
export function getNewPageNumber(newPage, currentPage) {
    const body = document.getElementById('body-container')
    switch (newPage) {
        case "next":
            body.scrollTo(0, 0)
            return currentPage + 1
        case "prev":
            body.scrollTo(0, 0)
            return currentPage - 1
        default:
            body.scrollTo(0, 0)
            return newPage
    };
};

export function getNumberOfPages(itemsNumber) {
    const rest = itemsNumber % 8
    let pagesNumber = Math.floor(itemsNumber / 8)
    if (rest) pagesNumber++
    return pagesNumber
}