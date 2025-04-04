import './App.css';
import {React} from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga4";
import AnimatedRoutes from './components/AnimatedRoutes';
import SEO from './components/components/SEO';

ReactGA.initialize([
  {
    trackingId: "G-283F8NNGEC",
  },
]);

// Send pageview with a custom exact path
ReactGA.send({ hitType: "pageview", page: "/my-exact path", title: "Custom Title" });

// Send a custom event
ReactGA.event({
  category: "your category",
  action: "your action",
  label: "your label", // optional
  value: 99, // optional, must be a number
  nonInteraction: true, // optional, true/false
});

export default function App() {
  return (
    <BrowserRouter>
        <SEO title="Made4Living | Smart Design and Property Solutions" description="Smart design and property solutions. All in one place. London based architectural, interior design studio, and property experts" url=""/> 
        <AnimatedRoutes/>
    </BrowserRouter>
  );
}