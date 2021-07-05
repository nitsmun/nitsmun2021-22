import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/screens/Home';
import History from './components/screens/History';
import Secretariat from './components/screens/Secretariat';
import Error404 from './components/screens/Error404';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <Router>

      <div className="App">
      
        <Navbar/> {/**Navbar stays for all pages**/}

        <Switch>

          {/*Home*/}
          <Route exact path="/">
            <Home />
          </Route>

          {/*History*/}
          <Route exact path="/history">
            <History
              title="History - NITS MUN"
            />
          </Route>

          {/*Secretariat*/}
          <Route exact path="/secretariat">
            <Secretariat
              title="Secretariat - NITS MUN"
            />
          </Route>

          {/*404*/}
          <Route path="/">
            <Error404/>
          </Route>

        </Switch>

        <Footer/> {/* Footer stays for all pages */}
     
      </div>
    </Router>

  );
}

export default App;
