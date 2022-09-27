import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { LoadingProvider } from './Contexts/Loading';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LoadingProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </LoadingProvider>
);