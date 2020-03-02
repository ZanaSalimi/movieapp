const loading = (state= [], action) => {
    switch (action.type) {
        case 'LOADING_MOVIE':
            return{
                ...state,
                isLoaded: action.isLoaded
            }
    
        default:
            return state
    }
}
export default loading