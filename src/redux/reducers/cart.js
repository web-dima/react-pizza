const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

function getPrice(arr) {
    return arr.reduce((previousValue, currentValue) => currentValue.price + previousValue, 0)
}

function deletePizza(state, action) {
    const newPrice = state.totalPrice - state.items[action.payload].totalPrice;
    const newAmount = state.totalCount - state.items[action.payload].totalCount;

    delete state.items[action.payload];
    return {
        ...state,
        totalPrice: newPrice,
        totalCount: newAmount
    }
}

function cart(state = initialState, action) {

    switch (action.type) {
        case "ADD_PIZZA": {

            const newPizzas = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];

            const obj = {
                ...state.items,
                [action.payload.id]: {
                    items: newPizzas,
                    totalPrice: getPrice(newPizzas),
                    totalCount: newPizzas.length
                }
            }
            const items = Object.values(obj).map(i => i.items)
            const combinedArr = [].concat(...items)
            return {
                ...state,
                items: obj,
                totalPrice: getPrice(combinedArr),
                totalCount: combinedArr.length
            }
        }
        case "CLEAR_CART":
            return initialState

        case "DELETE_PIZZA": {
            const newPrice = state.totalPrice - state.items[action.payload].totalPrice;
            const newAmount = state.totalCount - state.items[action.payload].totalCount;

            delete state.items[action.payload];
            return {
                ...state,
                totalPrice: newPrice,
                totalCount: newAmount
            }
        }

        case "ADD_ONE_PIZZA": {
            const newItemsPlusOne = [...state.items[action.payload].items,  state.items[action.payload].items[0]]

            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newItemsPlusOne,
                    totalPrice: getPrice(newItemsPlusOne),
                    totalCount: newItemsPlusOne.length
                }
            }
            const items = Object.values(newItems).map(i => i.items)
            const combinedArr = [].concat(...items)

            return {
                items: newItems,
                totalPrice: getPrice(combinedArr),
                totalCount: combinedArr.length
            }
        }

        case "REMOVE_ONE_PIZZA": {

            let itemsAfterDelete = state.items[action.payload].items
            if (itemsAfterDelete.length > 1) {
                itemsAfterDelete = itemsAfterDelete.splice(1)
            } else {
                return deletePizza(state, action)
            }

            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: itemsAfterDelete,
                    totalPrice: getPrice(itemsAfterDelete),
                    totalCount: itemsAfterDelete.length

                }
            }
            const items = Object.values(newItems).map(i => i.items)
            const combinedArr = [].concat(...items)

            return {
                items: newItems,
                totalPrice: getPrice(combinedArr),
                totalCount: combinedArr.length
            }
        }


        default :
            return state
    }
}
export default cart