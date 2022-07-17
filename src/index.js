import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './componets/groups/App';
import HeadMenu from './componets/groups/HeadMenu';
import "./styles/headMenu.css";
import "./styles/app.css";


const headMenu = ReactDOM.createRoot(document.getElementById('headMenu'));
const root = ReactDOM.createRoot(document.getElementById('root'));

headMenu.render(
    <React.StrictMode>
        <HeadMenu/>
    </React.StrictMode>
);


root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

