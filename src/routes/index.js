import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "../components/HomePage";
import SignIn from "../components/SignIn";
import Register from "../components/Register";
import PropertyPage from "../PropertyPage";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/home" exact component={HomePage} />
      <Route path="/signin" exact component={SignIn} />
      {/* <Route path="/register" exact component={Register} /> */}
      <Route path="/example" exact component={PropertyPage} />
    </Switch>
  </BrowserRouter>
);
