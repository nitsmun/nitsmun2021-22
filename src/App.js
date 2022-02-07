import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import Linktree from "./components/screens/Linktree";
import NITSMUN2022 from "./components/screens/NITSMUN2022";

const Home = lazy(() => import("./components/screens/Home"));
const History = lazy(() => import("./components/screens/History"));
const Team = lazy(() => import("./components/screens/Team"));
const Error404 = lazy(() => import("./components/screens/Error404"));
const AnnualConference = lazy(() =>
  import("./components/screens/AnnualConference")
);
const GlobalVoicesMun = lazy(() =>
  import("./components/screens/GlobalVoicesMun")
);
const MockMun = lazy(() => import("./components/screens/MockMun"));
const Dais = lazy(() => import("./components/screens/Dais"));

const Navbar = lazy(() => import("./components/Navbar"));

const About = lazy(() => import("./components/screens/About"));
const Articles = lazy(() => import("./components/screens/Articles"));
const MunU18 = lazy(() => import("./components/screens/MunU18.jsx"));

//! Navbar items scroll to top on click
let scrollTopList = document.getElementsByClassName("scroll-top");
for (let i = 0; i < scrollTopList.length; i++)
  scrollTopList[i].addEventListener("click", () => {
    window.scrollTo(0, 0);
  });

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <div className="App">
          <Navbar /> {/**Navbar stays for all pages**/}
          <Switch>
            {/*Home*/}
            <Route exact path="/">
              <Home title="NITS MUN" />
            </Route>

            {/*History*/}
            <Route exact path="/history">
              <History title="History | NITS MUN" />
            </Route>

            {/* Articles */}
            <Route exact path="/articles">
              <Articles title="Articles | NITS MUN" />
            </Route>

            {/* About US */}
            <Route exact path="/about">
              <About title="About | NITS MUN" />
            </Route>

            {/*Secretariat*/}
            <Route exact path="/team">
              <Team title="NITSMUN Team | NITS MUN" />
            </Route>

            {/*Events*/}
            {/*NITSMUN 2022*/}
            <Route exact path="/events/nitsmun2022">
              <NITSMUN2022 />
            </Route>

            {/*NITS Junior MUN*/}
            <Route exact path="/events/nits_junior_mun">
              <MunU18 />
            </Route>

            {/*Annnual Conference*/}
            <Route exact path="/events/annual-conference">
              <AnnualConference />
            </Route>

            {/*Global Voices MUN Conference*/}
            <Route exact path="/events/global-voices-mun">
              <GlobalVoicesMun />
            </Route>

            {/*The Dais*/}
            <Route exact path="/events/workshop">
              <Dais title="Workshop | NITS MUN" />
            </Route>

            {/*Mock MUNs Conference*/}
            <Route exact path="/events/mock-mun">
              <MockMun />
            </Route>

            {/*Link Tree*/}
            <Route path="/linktree">
              <Linktree title="Link Tree | NITS MUN" />
            </Route>

            {/*404*/}
            <Route path="/">
              <Error404 title="Error 404 | NITS MUN" />
            </Route>
          </Switch>
          <Footer /> {/* Footer stays for all pages */}
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
