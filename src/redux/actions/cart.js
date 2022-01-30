export const AddPizzaToCart = (pizza) => {
    return {
        type: "ADD_PIZZA",
        payload: pizza
    }
}

export const clearCart = () => {
    return {
        type: "CLEAR_CART"
    }
}

export const deletePizza = (id) => {
    return {
        type: "DELETE_PIZZA",
        payload: id
    }
}

export const addOnePizza = (id) => {
    return {
        type: "ADD_ONE_PIZZA",
        payload: id
    }
}

export const removeOnePizza = (id) => {
    return {
        type: "REMOVE_ONE_PIZZA",
        payload: id
    }
}