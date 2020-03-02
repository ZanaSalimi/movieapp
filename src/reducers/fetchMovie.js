const initialState = {
    Movie: []
}
const fetchMovie = (state = {}, action) => {
    switch (action.type) {
        case 'LOADING_MOVIE':
            return{
                ...state,
                isLoaded : true
            }
        case 'FETCH_MOVIE':
            return action.payload
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