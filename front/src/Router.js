import React from  'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import home from './pages/home';
import ver from './pages/ver';
import agregar from './pages/agregar';


const Router = () =>  (
  <BrowserRouter>
    <Switch>
      <Route exact component={home} path="/" />
      <Route exact component={ver} path="/ver" />
      <Route exact component={agregar} path="/agregar" />
    </Switch>
  </BrowserRouter>

)
export default Router;