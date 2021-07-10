import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/screens/Home';
import History from './components/screens/History';
import Team from './components/screens/Team';
import Error404 from './components/screens/Error404';
import AnnualConference from './components/screens/AnnualConference';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';
import About from "./components/screens/About";
import Articles from "./components/screens/Articles";

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

          {/* Articles */}
          <Route exact path="/articles">
            <Articles
              title="Articles - NITS MUN"
            />
          </Route>

          {/* About US */}
          <Route exact path="/about">
            <About
              title="About - NITS MUN"
            />
            
          </Route>

          {/*Secretariat*/}
          <Route exact path="/team">
            <Team
              title="Secretariat - NITS MUN"
            />
          </Route>

          {/*Events*/}
            {/*Annnual Conference*/}
          <Route exact path="/events/annual-conference">
            <AnnualConference
              title="Annual Conference - NITS MUN"
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
