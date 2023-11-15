import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';
import { hydrateRoot } from 'react-dom/client';
 
const rootElement = document.getElementById("root");
const croot = createRoot(rootElement);
if (rootElement.hasChildNodes()) {
  hydrateRoot(document.getElementById("root"), rootElement);
} else {
  croot.render(<App />);
}
// root.render(<App />, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
