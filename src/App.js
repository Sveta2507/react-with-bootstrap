import "./App.css";
import React, { Suspense } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { Home, About, Contacts } from "./pages";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import routes from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Suspense />
        <Switch>
          {/* <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
          <Route component={Contacts} path="/contacts" /> */}
          {routes.map((route) => {
            return <Route key={route.path} {...route} />;
          })}
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
