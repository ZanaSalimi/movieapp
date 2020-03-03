const initialState = {
    Movie: [],
    topList: [],
    loading: true
}
const fetchMovie = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_MOVIE':
            return {
                ...state,
                Movie: action.payload
            }
        case 'TOP_MOVIES':
            return {
                ...state,
                topList: action.payload.results,
                loading: false
            }/*
        case 'SEARCH_MOVIE':
            return {
                ...state,
                Movie: action.payload[0]
            }*/
        /*case 'LOADING':
            return{
                ...state,
                loading : true
            }*/
        default:
            return state
    }
}
export default fetchMovie