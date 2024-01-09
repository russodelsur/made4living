import React, { useEffect, useState, Suspense} from 'react';
import { useLocation, Routes, Route, Outlet } from "react-router-dom";
import Landing from '../components/components/Landing';
import { AnimatePresence } from 'framer-motion';
import projects from "../data.json"
import Loading from './components/Loading';

const Footer = React.lazy(() => import('./components/Footer'));
const Work = React.lazy(() => import('./pages/Work'));
const About = React.lazy(() => import('./pages/About'));
const Home = React.lazy(() => import('./pages/Home'));
const Header = React.lazy(() => import('./components/Header'));
const Contact = React.lazy(() => import("./pages/Contact"));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const ProjectSingle = React.lazy(() => import('./pages/ProjectSingle'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const Questionnaire = React.lazy(() => import('./pages/Questionnaire'));

function QuestionnaireLayout() {
  return (
  <>
    <Outlet />
  </>
  )
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
      <Suspense fallback={<Loading/>}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomeLayout />}>
            {
            loaded ?
            <Route exact path="/" index element={<Landing/>}/>
            :
            <Route exact path="/" index element={<Home/>}/>
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
      </Suspense>
      </AnimatePresence>
  );
}

export default AnimatedRoutes;