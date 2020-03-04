const initialState = {
    Movie: [],
    topList: [],
    searchMovies: [],
    loading: true
}
const fetchMovie = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_MOVIE':
            return {
                ...state,
                Movie: action.payload,
                loading: false
            }
        case 'TOP_MOVIES':
            return {
                ...state,
                topList: action.payload.results,
                loading: false
            }
        case 'SEARCH_MOVIE':
            return {
                ...state,
                searchMovies: action.payload.map(res=> {
                        return (
                            {
                                id: res.id,
                                name: res.title
                            }
                        )
                    })
            }
        case 'LOADING':
            return{
                ...state,
                loading : true
            }
        default:
            return state
    }
}
export default fetchMovie