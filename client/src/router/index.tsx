import React from "react";

export interface IRoute {
  path: string;
  component: React.ReactNode;
  exact?: boolean;
}

export enum Routes {
  INDEX = "/",
  LOGIN = "/login",
  REGISTER = "/register",
  MOVIES = "/movies",
}

export const publicRoutes: IRoute[] = [];

export const privateRoutes: IRoute[] = [];