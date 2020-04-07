import React, {PureComponent} from "react";
import {Switch, Route, Router} from "react-router-dom";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import Favorite from "../favorite/favorite.jsx";
import PrivateRoute from "../private-route/private-route.jsx";
import {AppRoute} from "../../const.js";
import history from "../../history.js";

class App extends PureComponent {

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={AppRoute.ROOT} component={Main}/>
          <PrivateRoute
            exact
            path={AppRoute.FAVORITES}
            render={() => <Favorite/>}
          />
          <Route exact path={`/offer/:id`} component={Property}/>
          <Route exact path={AppRoute.LOGIN} component={SignIn}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
