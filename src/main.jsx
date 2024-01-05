import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import "./styles/index.css"
import App from './App';
import { makeServer } from "./server";
import { AuthProvider } from './contexts/authContext';
import { UserProvider } from './contexts/userContext';
import { PostProvider } from './contexts/postContext';

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <UserProvider>
          <PostProvider>
            <App />
          </PostProvider>
        </UserProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
