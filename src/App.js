import Header from "./containers/Header"
import FoodList from "./containers/CountryList"
import FoodDetails from "./containers/CountryDetails";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CountryDetails from "./containers/CountryDetails"
import CountryList from "./containers/CountryList";


function App() {
  return (
    <div >
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' >
            <CountryList />
          </Route>
          <Route path='/country/:countryName'>
          <CountryDetails/>

          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
