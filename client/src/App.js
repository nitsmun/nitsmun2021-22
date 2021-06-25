import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/screens/Home';
import History from './components/screens/History';

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
          <Route path="/history">
            <History
              title="History - NITS MUN"
            />
          </Route>

        </Switch>

        <Footer/> {/**Footer stays for all pages**/}
     
      </div>
    </Router>

  );
}

export default App;
