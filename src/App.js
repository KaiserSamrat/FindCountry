import Header from "./containers/Header"
import FoodList from "./containers/FoodList"
import FoodDetails from "./containers/FoodDetails";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div >
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' >
            <FoodList />
          </Route>
          <Route path='/food/:foodId'>
            <FoodDetails></FoodDetails>

          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
