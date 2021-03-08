import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";



import './App.css';
import Navbar from "./component/navbar/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/services" exact component={Services} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
