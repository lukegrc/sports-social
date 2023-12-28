import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Auth from "./components/Auth/Auth";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <Router>
      <Switch>
      <Route path="/" exact component={() => (user ? <Home /> : <Redirect to="/auth" />)} />
      <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/" />)} />
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
