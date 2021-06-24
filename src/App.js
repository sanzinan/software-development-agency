import "./App.css";
import Home from "./Pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from "./Shared/Footer/Footer";
import NavBar from "./Shared/Header/NavBar";
import { createContext, useState } from "react";
import UserLogIn from "./Pages/UserLogin/UserLogin";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRouter from "./components/PrivateRouter/PrivateRouter";
import Services from "./components/Services/Services";
import TakaYourBusiness from "./components/TakaYourBusiness/TakaYourBusiness";
import GetService from "./Pages/GetService/GetService";
import NoMatch from "./Pages/NoMatch/NoMatch";

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <UserLogIn />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <PrivateRouter path="/getService/:serviceId">
            <GetService/>
          </PrivateRouter>
          <Route path="/about">
            <TakaYourBusiness />
          </Route>
          <PrivateRouter path="/dashboard">
            <Dashboard />
          </PrivateRouter>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
