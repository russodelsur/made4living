import {React} from 'react';
import { useLocation, Routes, Route, Outlet } from "react-router-dom";
import Footer from './components/Footer';
import Work from './pages/Work';
import About from './pages/About';
import Home from './pages/Home';
import Header from './components/Header';
import Contact from "./pages/Contact";
import Privacy from './pages/Privacy';
import ProjectSingle from './pages/ProjectSingle';
import projects from "../data.json"
import NotFound from './pages/NotFound';
import Questionnaire from './pages/Questionnaire';

import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();

  function QuestionnaireLayout() {
    return <Outlet />
  }
  function HomeLayout() {
    return (
      <>
        <Header/>
        <Outlet/>
      </>
    )
  }
  function BasicLayout() {
    return (
      <>
        <Header/>
        <Outlet />
        <Footer />
      </>
    )
  }
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" index element={<Home/>} />
        </Route>
        <Route path="/" element={<BasicLayout />}>
          <Route path="work" element={<Work />} />
          <Route
            path="/projects/:slug"
            element={<ProjectSingle projects={projects}/>}
          />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/" element={<QuestionnaireLayout />}>
          <Route path="tellusmore" element={<Questionnaire />} />
        </Route>
      </Routes>
      </AnimatePresence>
  );
}

export default AnimatedRoutes;