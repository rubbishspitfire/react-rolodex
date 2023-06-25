import React from 'react';
// import REactDOM from 'react-dom'; The new way to import createRoot:
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './containers/App';
import 'tachyons';


const root = createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

