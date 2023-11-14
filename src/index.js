import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { hydrate} from "react-dom";
import { createRoot } from 'react-dom/client';
 
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  root.render(<App />);
}
// root.render(<App />, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
