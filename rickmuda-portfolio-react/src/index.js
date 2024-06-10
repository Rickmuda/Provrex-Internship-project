import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route} from "react-router-dom";

import App from './App';
import Password from './pages/password';

ReactDOM.render(
    <React.StrictMode>
        <Routes> 
            <Route element={<App />} path="/"/>       
            <Route element={<Password />} path="/password"/>
        </Routes>
    </React.StrictMode>,
    document.getElementById('root')
);