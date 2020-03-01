const initialState = {
    Movie: []
}
const fetchMovie = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_MOVIE':
            return {
                ...state,
                Movie: action.payload
            }
        case 'SEARCH_MOVIE':
            return {
                ...state,
                Movie: action.payload[0]
            }    
        default:
            return state
    }
}
export default fetchMovie