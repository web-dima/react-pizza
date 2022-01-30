const initialState = {
    items: [],
    isLoading: false
}

function pizzas(state = initialState, action) {
    switch (action.type) {
        case "SET_PIZZAS":
            return {
                ...state,
                items: action.payload,
                isLoading: false
            }
        case "CHANGE_LOADING" :
            return {
                ...state,
                isLoading: action.payload
            }
        default :
            return state
    }
}

export default pizzas