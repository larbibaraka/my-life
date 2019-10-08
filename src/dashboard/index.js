import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MyDashboard from './Dashboard/dashboard';
export default ({ match }) => {
  console.log("match  : ", { match });

  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route exact path="/dashboard" render={(props) => <MyDashboard {...props} />} />
          <Route  path="/dashboard/goals" render={() => <h3>Goals :p </h3>} />
          <Route  path="/dashboard/habits" render={() => <h3>habits :p </h3>} />
          <Route  path="/dashboard/books" render={() => <h3>books :p </h3>} />
          <Route  path="/dashboard/workout" render={() => <h3>workout :p </h3>} />
          <Route  path="/dashboard/workshop" render={() => <h3>workshop :p </h3>} />
          <Route  path="/dashboard/social_media" render={() => <h3>social_media :p </h3>} />
          <Route  path="/dashboard/expense" render={() => <h3>expense :p </h3>} />
          <Route  path="/dashboard/animes" render={() => <h3>animes :p </h3>} />
          <Route  path="/dashboard/movies" render={() => <h3>movies :p </h3>} />
          <Route  path="/dashboard/pics" render={() => <h3>pics :p </h3>} />
          <Route  path="/dashboard/thoughts" render={() => <h3>thoughts :p </h3>} />
          <Route  path="/dashboard/diaries" render={() => <h3>diaries :p </h3>} />
          <Route render={() => <h3>Not found</h3>} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};
