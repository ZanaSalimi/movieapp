const initialState = [
]
const searchList = (state= initialState, action) => {
    switch (action.type) {
        case 'SEARCH_LIST':
            return[
                action.payload
            ]
        default:
            return state
    }
}
export default searchList