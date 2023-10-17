import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Context
import { AdminNavSelectContextProvider } from './Context/AdminNavSelectContext';
import { FirebaseProvider } from './Context/firebaseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseProvider>
      <AdminNavSelectContextProvider>
        <App />
      </AdminNavSelectContextProvider>
    </FirebaseProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
