import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ScrollProvider } from './Components/ScrollContext'; // Import the ScrollProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ScrollProvider>  {/* Wrap your App with ScrollProvider */}
      <App />
    </ScrollProvider>
  </React.StrictMode>
);

reportWebVitals();