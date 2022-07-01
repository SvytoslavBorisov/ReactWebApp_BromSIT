import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './componets/groups/App';
import HeadMenu from './componets/groups/HeadMenu';
import "./styles/headMenu.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
const headMenu = ReactDOM.createRoot(document.getElementById('headMenu'));

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

headMenu.render(
    <React.StrictMode>
        <HeadMenu/>
    </React.StrictMode>
);
