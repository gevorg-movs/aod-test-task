import React, { FC, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useRoutes } from "./hooks/useRoutes";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

const App: FC = () => {
  const { verify: verifyUser } = useActions();
  const { isAuth } = useTypedSelector((state) => state.auth);
  const routes = useRoutes(isAuth);
  const { setIsAuth } = useActions();

  useEffect(() => {
    (async function () {
      if (localStorage.getItem("token")) {
        await verifyUser();
      } else {
        setIsAuth(false);
      }
    })();
  }, []);

  return (
    <div className="container py-5 my-5">
      <BrowserRouter>
        <div className="container">
          <Navbar />
          {routes}
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;