import React from "react";
import Header from "./componets/Header";
import Main from "./componets/Main";
import Cart from "./componets/Cart";
import {Route, Switch, Redirect} from 'react-router-dom'

function App() {

    // window.testForUpdates = () => {
    //     axios.get("http://localhost:3001/pizzas").then(({data}) => {
    //         dispatch(setPizzas(data.pizzas))
    //     })
    // }


  return (
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Switch>
            <Route path="/" component={Main} exact />
            <Route path="/cart" component={Cart} exact/>
            <Redirect to='/'/>
          </Switch>
        </div>
      </div>
  );
}

export default App;
