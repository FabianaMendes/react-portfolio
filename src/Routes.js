import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ScrollToTop from "./models/ScrollToTop";
import Navbar from "./components/Navbar";

const About = lazy(() => import("./pages/About"));
const Contacts = lazy(() => import("./pages/Contacts"));
const Skills = lazy(() => import("./pages/Skills"));
const Experiences = lazy(() => import("./pages/Experiences"));

function Routes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<h5>Loading...</h5>}>
        <Switch>
          <Route path="/contato">
            <Contacts />
          </Route>
          <Route path="/habilidades">
            <Skills />
          </Route>
          <Route path="/experiencias">
            <Experiences />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Routes;
