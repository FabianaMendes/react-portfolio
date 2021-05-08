import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ScrollToTop from "./models/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

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
                    <Route path="/contacts">
                        <Contacts />
                    </Route>
                    <Route path="/skills">
                        <Skills />
                    </Route>
                    <Route path="/experiences">
                        <Experiences />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default Routes;