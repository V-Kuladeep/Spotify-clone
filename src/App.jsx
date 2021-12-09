import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Pages/Headercomponent/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Components/Athucomponent/Login";
import Signup from "./Components/Athucomponent/Signup";
import Pagenotfound from "./Pages/Pagenotfound";
import { Authcontextapi } from './Apis/Authcontext';
import UserHome from './UserComponents/UserHome';

const App = () => {
  let state = useContext(Authcontextapi);
 
    return (
      <section id="spotifymainblock">
        <article>
          <Router>
            <header>
              
              {!state?<Navbar />:""}
            </header>
            <ToastContainer />
            <main>
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/login" exact>
                  <Login />
                </Route>
                <Route path="/signup" exact>
                  <Signup />
                </Route>
                {/* start Authenticated routes */}
                <Route path="/UserHome">
                  <UserHome/>
                </Route>
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
 
  
  
}

export default App;
