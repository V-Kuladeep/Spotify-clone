import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Pages/Headercomponent/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Components/Athucomponent/Login";
import Signup from "./Components/Athucomponent/Signup";
import Pagenotfound from "./Pages/Pagenotfound";
import { Authcontextapi } from "./Apis/Authcontext";
import UserHome from "./UserComponents/UserHome";
import MyFirstPortal from "./Pages/MyFirstPortal";
import Spinner from "./Pages/Spinner/Spinner";
import ProtectedRoute from "./Helpers/ProtectedRoute";
import PublicRoute from './Helpers/PublicRoute';
import PasswordReset from "./Components/Athucomponent/PasswordReset";
import PhoneAuth from './Components/Athucomponent/PhoneAuth';
import CreatePlayList from "./Components/Audiocomponent/CreatePlayList";

const App = () => {
  let AUTH = useContext(Authcontextapi);

  return (
    <section id="spotifymainblock">
      <article>
        <Router>
          {/* <header>{AUTH ? <Navbar/> : ""}</header> */}
          <header>
            <Navbar />
          </header>
          <ToastContainer />
          {/* <MyFirstPortal/> */}
          <main>
            <Switch>
              <PublicRoute path="/" exact>
                <Home />
              </PublicRoute>
              <PublicRoute path="/login" exact>
                <Login />
              </PublicRoute>
              <PublicRoute path="/signup" exact>
                <Signup />
              </PublicRoute>
              <PublicRoute path="/PasswordReset" exact>
                <PasswordReset />
              </PublicRoute>
              <PublicRoute path="/PhoneAuth" exact>
                <PhoneAuth/>
              </PublicRoute>
              {/* <ProtectedRoute>
                <CreatePlayList/>
              </ProtectedRoute> */}
              {/* start Authenticated routes */}
              {AUTH === null ? (
                <Spinner />
              ) : (
                <ProtectedRoute path="/UserHome" component={UserHome}>
                  <UserHome />
                </ProtectedRoute>
              )}
              {/* End of Authenticated routes */}
              <Route path="*">
                <Pagenotfound />
              </Route>
            </Switch>
          </main>
        </Router>
      </article>
    </section>
  );
};

export default App;
