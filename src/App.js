import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductPage from "./Pages/productPage";
import ProductDesp from "./Components/ProductDetails/productDetails";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ProductPage} />
        <Route exact path="/:id" component={ProductDesp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
