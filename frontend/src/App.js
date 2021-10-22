import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import { Switch } from "react-router-dom";
import Footer from "./components/Footer";
import React from "react";
import { Provider } from "react-redux";
import store from "./components/reducers/store";
import UpdateProfile from "./components/UpdateProfile";
import PrivateRoute from "./PrivateRoute";
import NotFound from "./components/NotFound";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <ToastContainer />
          <Header />
          <Switch>
            <PrivateRoute exact path="/" component={Homepage} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <PrivateRoute exact path="/profile" component={UpdateProfile} />
            <Route path="*" component={NotFound}/>
          </Switch>
          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;
