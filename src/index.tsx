import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Styles/index.scss';
import { AuthContextProvider } from './Contexts/useAuthContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);