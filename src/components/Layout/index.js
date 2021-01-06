import React from "react";
import Header from "../Header";
import { Switch, Route } from "react-router-dom";
import SignIn from "../SignIn";
import App from "../../containers/App";
import CardContextProvider from "../../context/CardContext";
import NotFound from '../NotFound';

const layout = () => {
  return (
    <CardContextProvider>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/cards" component={App} />
          <Route path='*' exact={true} component={NotFound} />
        </Switch>
      </div>
    </CardContextProvider>
  );
};

export default layout;
