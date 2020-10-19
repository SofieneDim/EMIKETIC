// App Imports
import * as all from './all'
import * as movies from './movies'
import * as series from './series'

// User routes
const user = {
    ...all,
    ...movies,
    ...series,
}

export default user