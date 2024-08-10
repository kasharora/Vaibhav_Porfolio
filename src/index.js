import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter  } from 'react-router-dom';
import { ThemeProvider } from '../src/Component/ThemeContext';

// Change the tab title dynamically
document.title = "Vaibhav Parihar";

// Change the favicon dynamically
const favicon = document.getElementById('favicon');
if (favicon) {
  favicon.href = "/new-favicon.ico"; // Path to your new favicon
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter >
    <ThemeProvider>
      <App />
    </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
