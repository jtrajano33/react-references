import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Invoice from './pages/Invoice';
import Film from './pages/Film';
import { Provider } from 'react-redux'
import store from './store/store';
import { Login } from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import { StyledSample } from './pages/StyledSample';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/films/:filmId" element={<Film />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/about/:invoiceId" element={<Invoice />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/styled" element={<StyledSample />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
