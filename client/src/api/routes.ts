const API_URL = `${process.env.REACT_APP_API_URL}/api`;

export const LOGIN_URL = `${API_URL}/auth/login`;
export const REGISTER_URL = `${API_URL}/auth/register`;
export const VERIFY_USER_URL = `${API_URL}/auth/verify`;

export const GET_MOVIES_URL = `${API_URL}/movies`;
export const SHOW_MOVIE_URL = `${API_URL}/movies/show`;
export const ADD_MOVIE_URL = `${API_URL}/movies/create`;
export const UPDATE_MOVIE_URL = `${API_URL}/movies/update`;
export const DELETE_MOVIE_URL = `${API_URL}/movies/delete`;

export const GET_ACTORS_URL = `${API_URL}/actors`;
export const SHOW_ACTOR_URL = `${API_URL}/actors/show`;
export const ADD_ACTOR_URL = `${API_URL}/actors/create`;
export const UPDATE_ACTOR_URL = `${API_URL}/actors/update`;
export const DELETE_ACTOR_URL = `${API_URL}/actors/delete`;



export const GET_FAVORITE_MOVIES_URL = `${API_URL}/favorite-movies`
export const ADD_FAVORITE_MOVIE_URL = `${API_URL}/favorite-movies/add`
export const DELETE_FAVORITE_MOVIE_URL = `${API_URL}/favorite-movies/delete`


