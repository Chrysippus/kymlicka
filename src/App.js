import React, { lazy } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "academicons";
import "./css/main.css";
import "./css/style.scss";
import "./css/fonts.css";
import WKNavbar from "./components/shared/WKNavbar";
import { Head } from "./components/shared/Head";
import { Foot } from "./components/shared/Foot";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Waiting } from "./components/shared/waiting";
import { HelmetProvider } from "react-helmet-async";
const Home = lazy(() => import("./pages/Home"));
const Bio = lazy(() => import("./pages/Bio"));
// const Cv = lazy(() => import("./pages/Cv"));
const Asf = lazy(() => import("./pages/Asf"));
const Aff = lazy(() => import("./pages/Aff"));
const News = lazy(() => import("./pages/News"));
const Pub = lazy(() => import("./pages/Pub"));
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <HelmetProvider>
      <div className="App">
        <Head />
        <WKNavbar />
        <main>
          <Switch>
            <Route exact path="/animal-studies-fellowship" component={Waiting(Asf)} />
            <Route
              path="/newsletter/:no/:year/:month/"
              component={Waiting(News)}
            />
            <Route path="/newsletter/:no/:year" component={Waiting(News)} />
            <Route exact path="/newsletter/:no" component={Waiting(News)}>
              <Redirect to="/newsletter" />
            </Route>
            <Route exact path="/newsletter" component={Waiting(News)} />
            <Route exact path="/affiliations" component={Waiting(Aff)} />
            <Route path="/publications/:id/:sub" component={Waiting(Pub)} />
            <Route path="/publications/:id" component={Waiting(Pub)} />
            <Route exact path="/publications" component={Waiting(Pub)} />
            <Route path="/biography" component={Waiting(Bio)} />
            <Route exact path="/" component={Waiting(Home)} />
            <Route component={Waiting(Home)} />
          </Switch>
        </main>
        <Foot />
      </div>
      </HelmetProvider>
    </Router>
  );
}

export default App;
