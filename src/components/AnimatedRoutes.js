import {React} from 'react';
import { useLocation, Routes, Route, Outlet } from "react-router-dom";
import Footer from './Footer';
import Work from './pages/Work';
import About from './pages/About';
import Home from './Home';
import Header from './Header';
import Services from './pages/Services';
import Contact from "./pages/Contact";
import Privacy from './pages/Privacy';
import ProjectSingle from './pages/ProjectSingle';
import projects from "../data.json"
import NotFound from './pages/NotFound';
import Questionnaire from './pages/Questionnaire';

import { AnimatePresence } from 'framer-motion';

function BasicLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

function QuestionnaireLayout() {
  return <Outlet />
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<BasicLayout />}>
          <Route index element={<Home />} />
          <Route exact path="work" element={<Work />} />
          <Route
            exact
            path="/projects/:slug"
            Component={(props) => <ProjectSingle {...props} projects={projects} />}
          />
          <Route exact path="about" element={<About />} />
          <Route exact path="services" element={<Services />} />
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