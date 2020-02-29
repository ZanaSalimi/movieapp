const initialState = []
const topMovies = (state = initialState,action) => {
    switch (action.type) {
        case 'TOP_MOVIES':
            return action.payload.results
        default:
            return state
    }
}
export default topMovies