import React, { Suspense, lazy } from "react";
import "./css/normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "academicons";
import "./css/main.css";
import "./css/style.css";
import "./css/fonts.css";
import WKNavbar from "./components/shared/WKNavbar";
import { Head } from "./components/shared/Head";
import { Foot } from "./components/shared/Foot";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Spinner from "react-bootstrap/Spinner";
const Home = lazy(() => import("./pages/Home"));
const Bio = lazy(() => import("./pages/Bio"));
const Asf = lazy(() => import("./pages/Asf"));
const Aff = lazy(() => import("./pages/Aff"));
const News = lazy(() => import("./pages/News"));
const Pub = lazy(() => import("./pages/Pub"));
const NotFound = lazy(() => import("./pages/404.js"));
function App() {
  const wait = (path) => (
    <Suspense
      fallback={
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "80vh" }}
        >
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      }
    >
      {path}
    </Suspense>
  );
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <HelmetProvider>
        <div className="App">
          <Head />
          <WKNavbar />
          <main>
            <Routes>
              <Route
                path="/animal-studies-fellowship"
                element={wait(<Asf />)}
              />
              <Route
                path="/newsletter/:no/:year/:month/"
                element={wait(<News />)}
              />
              <Route path="/newsletter/:no/:year/" element={wait(<News />)} />
              <Route path="/newsletter/:no/" element={wait(<News />)} />
              <Route path="/newsletter/" element={wait(<News />)} />
              <Route path="/affiliations" element={wait(<Aff />)} />
              <Route path="/publications/:id/:sub" element={wait(<Pub />)} />
              <Route path="/publications/:id" element={wait(<Pub />)} />
              <Route path="/publications" element={wait(<Pub />)} />
              <Route path="/biography" element={wait(<Bio />)} />
              <Route path="/" element={wait(<Home />)} />
              <Route path="*" element={wait(<NotFound />)} />
            </Routes>
          </main>
          <Foot />
        </div>
      </HelmetProvider>
    </Router>
  );
}

export default App;
