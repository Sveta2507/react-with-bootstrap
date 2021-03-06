import "./App.css";
import React, { Component, Suspense } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { Home, About, Contacts } from "./pages";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import routes from "./routes";
import AuthContext from "./context/Auth";

class App extends Component {
  render() {
    return (
      <>
        <AuthContext>
          <BrowserRouter>
            <Navigation />
            <Suspense />
            <Switch>
              {routes.map((route) => {
                return <Route key={route.path} {...route} />;
              })}
            </Switch>
          </BrowserRouter>
          <Footer />
        </AuthContext>
      </>
    );
  }
}

export default App;
