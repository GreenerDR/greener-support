import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.component";
import HomePage from "./pages/HomePage/Home.page";
import LoginPage from "./pages/LoginPage/Login.page";
import SupportFormPage from "./pages/SupportFormPage/SupportForm.page";
import TicketDetail from './pages/TicketDetailPage/TicketDetail.page';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/support" component={SupportFormPage} />
            <Route path="/ticket" component={TicketDetail} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
