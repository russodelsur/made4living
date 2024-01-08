import {React, useEffect, useState} from 'react';
import { useLocation, Routes, Route, Outlet } from "react-router-dom";
import Landing from '../components/components/Landing';
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

function AnimatedRoutes() {
  const location = useLocation();

  const [loaded, turnOffLanding] = useState(true)

  useEffect(() => {
    const visitedBefore = sessionStorage.getItem("visitedBefore")
    if (visitedBefore) {
        turnOffLanding(false);
    } else {
        sessionStorage.setItem("visitedBefore", "true");
        setTimeout(()=>{turnOffLanding(false)}, 5000)
    }  
}, []);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomeLayout />}>
          {
          loaded ?
          <Route exact path="/" index element={<Landing/>} />
          :
          <Route exact path="/" index element={<Home/>} />
        } 
        </Route>
        <Route element={<BasicLayout />}>
          <Route exact path="work" element={<Work />} />
          <Route
            exact path="/projects/:slug"
            element={<ProjectSingle projects={projects}/>}
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