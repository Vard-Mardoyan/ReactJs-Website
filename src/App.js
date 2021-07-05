import React from 'react'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav/nav";
import { Routes } from "./helpers/routes";
import "./App.css";

function App() {    
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          {Routes.map(({ route, component: Component }, index) => (
            <Route exact path={route} key={index}>
              <Component />
            </Route>
          ))}
          <Route path="*">
            {" "}
            <h1>Not Found</h1>{" "}
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
