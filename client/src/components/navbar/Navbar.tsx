import React from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Link} from "react-router-dom";
import {useActions} from "../../hooks/useActions";

const Navbar = () => {
  const {isAuth, user} = useTypedSelector((state) => state.auth);
  const {logout} = useActions();

  return (
     <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
       <div className="container-fluid">
         <Link className="navbar-brand" to="/">
           Home
         </Link>
         <div className="collapse navbar-collapse" id="navbarNav">
           <ul className="navbar-nav">
             <li className="nav-item">
               <div className="dropdown ms-3">
                 <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                 >
                   Movies
                 </button>
                 <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                 >
                   <li>
                     <Link className="nav-link" to="/movies">
                       All Movies
                     </Link>
                     <Link className="nav-link" to="/movies/add">
                       Add Movie
                     </Link>
                   </li>
                 </ul>
               </div>
             </li>

             <li className="nav-item">
               <Link to="/actors" className="btn btn-secondary ms-4">
                 Actors
               </Link>
             </li>

             <li className="nav-item">
               <Link to="/favorite-movies" className="btn btn-secondary ms-4">
                 Favorite Movies
               </Link>
             </li>
           </ul>

           <div className="ms-auto">
             {isAuth ? (
                <div className="d-flex">
                  <a className="nav-link disabled ">{user.name}</a>
                  <a className="nav-link" onClick={logout}>
                    Logout
                  </a>
                </div>
             ) : (
                <div className="d-flex">
                  <Link to="/register" className="nav-link">
                    Register
                  </Link>
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </div>
             )}
           </div>
         </div>
       </div>
     </nav>
  );
};

export default Navbar;