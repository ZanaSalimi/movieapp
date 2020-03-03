const initialState = {
    loading: true
}
const fetchMovie = (state = initialState, action) => {
    switch (action.type) {
        /*case 'LOADING':
            return{
                ...state,
                loading : true
            }*/
        case 'FETCH_MOVIE':
            return {
                ...action.payload,
                loading: false
            }
        /*case 'SEARCH_MOVIE':
            return [
                ...state,
                action.payload[0]
            ]    */
        default:
            return state
    }
}
export default fetchMovie