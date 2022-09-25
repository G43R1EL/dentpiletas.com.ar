import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./components/views/home/Home";
import {Fiber} from "./components/views/fiber/Fiber";
import {Concrete} from "./components/views/concrete/Concrete";
import {Complements} from "./components/views/complements/Complements";
import {Contact} from "./components/views/contact/Contact";
import {App} from "./App";
import './styles/styles'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} >
                <Route index element={<Home />} />
                <Route path="/fibra" element={<Fiber />} />
                <Route path="/hormigon" element={<Concrete />} />
                <Route path="/complementos" element={<Complements />} />
                <Route path="/contacto" element={<Contact />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
