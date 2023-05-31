import './App.css';
import {React} from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Footer from './components/Footer';
import Work from './components/pages/Work';
import About from './components/pages/About';
import Home from './components/Home';
import Header from './components/Header';
import Services from './components/pages/Services';
import Contact from "./components/pages/Contact";
import Privacy from './components/pages/Privacy';
import ProjectSingle from './components/pages/ProjectSingle';
import projects from "./data.json"
import Questionnaire from './components/pages/Questionnaire';
import NotFound from './components/pages/NotFound';
import ReactGA from "react-ga4";

ReactGA.initialize([
  {
    trackingId: "G-283F8NNGEC",
  },
]);

// Send pageview with a custom exact path
ReactGA.send({ hitType: "pageview", page: "/my-exact path", title: "Custom Title" });

// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());

// gtag('config', 'G-283F8NNGEC');

// Send a custom event
ReactGA.event({
  category: "your category",
  action: "your action",
  label: "your label", // optional
  value: 99, // optional, must be a number
  nonInteraction: true, // optional, true/false
});

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


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
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
    </BrowserRouter>
  );
}

