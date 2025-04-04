import React, { useEffect, useState, lazy, Suspense } from "react";
import { useLocation, Routes, Route, Outlet } from "react-router-dom";
import Landing from "../components/components/Landing";
import { AnimatePresence } from "framer-motion";
import projects from "../data.json";
import Loading from "./components/Loading";
import Home from "./pages/Home";

const Footer = lazy(() => import("./components/Footer"));
const Work = lazy(() => import("./pages/Work"));
const About = lazy(() => import("./pages/About"));
const Header = lazy(() => import("./components/Header"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const ProjectSingle = lazy(() => import("./pages/ProjectSingle"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Questionnaire = lazy(() => import("./pages/Questionnaire"));

function QuestionnaireLayout() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
}

function HomeLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
function BasicLayout() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header />
        <Outlet />
        <Footer />
      </Suspense>
    </>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  // Check sessionStorage and initialize the 'loaded' state accordingly.
  const checkVisitedBefore = () => {
    const visitedBefore = localStorage.getItem("visitedBefore");
    return visitedBefore != null; // Will return true if 'visitedBefore' exists in localStorage, otherwise false.
  };

  const [loaded, turnOffLanding] = useState(checkVisitedBefore);

  useEffect(() => {
    // If 'loaded' is false, it means the user hasn't visited before, so we set it in localStorage and start the timer.
    if (!loaded) {
      localStorage.setItem("visitedBefore", "true");
      setTimeout(() => {
        turnOffLanding(true);
      }, 3000);
    }
    // We can also skip adding 'loaded' to the dependency array since it won't change during the lifetime of this effect.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomeLayout />}>
          {loaded ? (
            <Route exact path="/" index element={<Home />} />
          ) : (
            <Route exact path="/" index element={<Landing />} />
          )}
        </Route>
        <Route element={<BasicLayout />}>
          <Route exact path="work" element={<Work />} />
          <Route
            exact
            path="/projects/:slug"
            element={<ProjectSingle projects={projects} />}
          />
          <Route exact path="about" element={<About />} />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="privacy-policy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route exact path="/" element={<QuestionnaireLayout />}>
          <Route exact path="tellusmore" element={<Questionnaire />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
