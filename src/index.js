import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavigationBar from './components/navbar/NavigationBar';
import FooterPage from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavigationBar />
    <FooterPage />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
