import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { UserDataProvider } from './context/UserDataContext.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserDataProvider>
    
        <App />
     
    </UserDataProvider>
  </React.StrictMode>
);
