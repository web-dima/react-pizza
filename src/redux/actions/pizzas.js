import axios from "axios";

export const setLoading = (bool) => {
    return {
        type: "CHANGE_LOADING",
        payload: bool
    }
}

export const fetchPizzas = (category, sortBy) => (dispatch) => {
    dispatch(setLoading(true))
    axios.get(`/pizzas?${category !== null ? "category=" + category : ""}&_sort=${sortBy.type}&_order=${sortBy.order}`)
        .then(({data}) => data)
        .then((data)=>
        dispatch(setPizzas(data))
    )

}

export const setPizzas = (items) => {
    return {
        type: "SET_PIZZAS",
        payload: items,
        isLoading: true
    }
}


