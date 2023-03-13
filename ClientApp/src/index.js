import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import "./custom.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header,NavMenu,Footer,Home,Menu,Appetizers,Meals,Specialty,Combos,OrderOnline2,Reservation,About,Contact,Login,Borrar } from './components';


const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('reactRoot');       //Linking to index.html file
const root = createRoot(rootElement);

root.render(
    <Router basename={baseUrl}>
        <Header />
        <NavMenu />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/appetizers" element={<Appetizers />} />
            <Route path="/meals" element={<Meals />} />
            <Route path="/specialty" element={<Specialty />} />
            <Route path="/combos" element={<Combos />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/orderOnline" element={<OrderOnline2 />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/borrar" element={<Borrar />} />
        </Routes>
        <Footer />
    </Router>,        
);


