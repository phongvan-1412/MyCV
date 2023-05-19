import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';


class HomePage extends Component {
    state = {
        info: []
    }
    render() {
        return (
            <div>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/portfolio" element={<Portfolio />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Routes>

                <Footer />
            </div>
        )
    }
}
export default HomePage;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <ScrollToTop />
        <HomePage style={{ padding: "0px", margin: "0px" }} />
    </BrowserRouter>
);

