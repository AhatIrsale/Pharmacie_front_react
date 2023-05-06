import React from 'react';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components/Layout";
import PharmacieForm  from "./components/PharmacieForm";
import ZoneByCity from "./components/pgarde";
import Details from "./components/details";
import Test  from "./components/test";
import Zone2  from "./components/Zone2";
import Zone1  from "./components/Zone1";

import City  from "./components/city";
import Zone  from "./components/Zone";
import 'bootstrap/js/src/collapse.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

function App() {
 
  return (
    
    <Router>
      <Header />
      <div className="main-wrapper">
      <Routes>
          <Route path="/" element={<PharmacieForm />} />
          <Route path="/test" element={<Test />} />
          <Route path="/pgarde" element={<ZoneByCity />} />
          <Route path="/details" element={<Details />} />
          <Route path="/city" element={<City />} />
          <Route path="/zone" element={<Zone />} />
          
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
