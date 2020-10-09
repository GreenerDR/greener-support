import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar.component";
import LoginPage from "./Pages/LoginPage/Login.page";
import SupportFormPage from "./Pages/SupportFormPage/SupportForm.page";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/support" component={SupportFormPage} />
            <Route path="/supprot" component={null} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
