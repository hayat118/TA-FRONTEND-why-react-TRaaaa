import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './component/app';

import './styles/index.css';

// ReactDOM.render(<App/>, document.getElementById('root'));

let root =ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)