import React from 'react';
import Caterogy from "./Caterogy";
import Sort from "./Sort";
import Pizza from "./Pizza";
import Loader from "../utils/loader"
import { useSelector, useDispatch } from "react-redux"
import { setCategory, setSortBy } from "../redux/actions/filter"
import { fetchPizzas } from "../redux/actions/pizzas";
import {AddPizzaToCart} from "../redux/actions/cart";


const caterogyItems = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые",]
const sortItems = [
    {name : "популярности" , type: "rating", order: "desc"},
    {name: "цене", type: "price", order: "desc"},
    {name: "алфавиту", type: "name", order: "asc"}
]

function Main() {
    const dispatch = useDispatch()

    const state = useSelector(({pizzas, filter, cart}) => {
        return {
            pizzas : pizzas.items,
            loading : pizzas.isLoading,
            caterogy: filter.category,
            sortBy: filter.sortBy,
            totalPizzasInCart: cart.items
        }
    })

    const addToCartHandler = React.useCallback(
        (obj) => {
            dispatch(AddPizzaToCart(obj))
        }
    , [dispatch])


    React.useEffect(  ()=> {
        dispatch(fetchPizzas(state.caterogy, state.sortBy))
    },[dispatch, state.sortBy, state.caterogy])


    const toStoreCategories = React.useCallback(
        (idx) => {
            dispatch(setCategory(idx))
        }
        , [dispatch])

    const toStoreSort = React.useCallback(
        (type) => {
            dispatch(setSortBy(type))
        }
    , [dispatch])


    return (
        <div className="container">
            <div className="content__top">
                <Caterogy
                    activeCategory={state.caterogy}
                    items={caterogyItems}
                    onClickFn = {toStoreCategories}
                />
                <Sort
                    activeSort={state.sortBy.type}
                    items={sortItems}
                    onClickFn = {toStoreSort}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    !state.loading ? state.pizzas.map(pizza => {
                        // console.log(pizza)
                        return (
                            <Pizza
                                key={pizza.id}
                                {...pizza}
                                addToCart={addToCartHandler}
                                AddedToCart={state.totalPizzasInCart[pizza.id] && state.totalPizzasInCart[pizza.id].totalCount}
                            />
                        )
                    }) : Array(10).fill(<Loader />).map((_, idx) => <Loader key={idx} />)
                }
            </div>
        </div>
    );
}

export default Main;