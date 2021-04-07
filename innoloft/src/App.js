import React from "react";
import { Route } from "react-router-dom";
import Home from "./Components/Images/Home";
import Product from "./Components/Images/Product";

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/product" component={Product} />
    </div>
  );
}

export default App;
