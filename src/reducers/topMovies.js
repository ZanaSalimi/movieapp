const initialState = {
    topMovies: []
}
const topMovies = (state = initialState,action) => {
    switch (action.type) {
        case 'TOP_MOVIES':
            return {
                ...state,
                topMovies:[
                    action.payload
                ]
            }
    
        default:
            return state
    }
}
export default topMovies