import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/reset.css'
import Modal from 'react-modal';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

Modal.setAppElement('#root');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>
);