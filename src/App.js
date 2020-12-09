import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Sponsors from "./Pages/Sponsors/Sponsors";
import Header from "./Components/Header/Header";
import Goals from "./Pages/Goals/Goals";
export function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/sponsors" component={Sponsors} />
          <Route exact path="/goals" component={Goals} />
        </Switch>
      </Router>
    </div>
  );
}
