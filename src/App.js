import Header from "./containers/Header"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CountryDetails from "./containers/CountryDetails"
import CountryList from "./containers/CountryList";
import NotFound from './containers/NotFound';


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
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
