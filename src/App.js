import './App.css';
import {React} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

// import Landing from './components/Landing';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route
            exact
            path="/projects/:slug"
            Component={(props) => <ProjectSingle {...props} projects={projects} />}
          />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<Privacy />} />
        </Route>
      </Routes>
      <Routes>
      <Route path="tellusmore" element={<Questionnaire />} />
      </Routes>
      {/* <Landing/> */}
      <Footer/>
    </BrowserRouter>
  );
}

