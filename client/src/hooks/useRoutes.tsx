import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "../pages/auth/Login";
import Movies from "../pages/movies/Movies";
import AddMovie from "../pages/movies/AddMovie";
import Register from "../pages/auth/Register";
import Home from "../pages/Home/Home";
import ShowMovie from "../pages/movies/ShowMovie";
import EditMovie from "../pages/movies/EditMovie";
import Actors from "../pages/actors/Actors";
import ShowActor from "../pages/actors/ShowActor";
import FavoriteMovies from "../pages/movies/FavoriteMovies";

export const useRoutes = (isAuthenticated: boolean) => {
  if (isAuthenticated) {

    return (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movies" exact>
          <Movies />
        </Route>
        <Route path="/movies/add">
          <AddMovie />
        </Route>
        <Route path="/movies/show/:movieId">
          <ShowMovie />
        </Route>
        <Route path="/movies/edit/:movieId">
          <EditMovie />
        </Route>

         <Route path="/favorite-movies">
            <FavoriteMovies />
         </Route>

         <Route path="/actors" exact>
            <Actors />
         </Route>

         <Route path="/actors/show/:actorId" exact>
            <ShowActor />
         </Route>

        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>

      <Redirect to="/login" />
    </Switch>
  );
};