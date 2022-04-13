import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import SearchGif from "./pages/searchgif";
import Trending from "./pages/trending";


function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
            <Route path="/trending">
                <Trending />
            </Route>
            <Route path="/search">
                <SearchGif />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;