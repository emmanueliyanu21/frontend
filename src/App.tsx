import "./App.css";

import Home from "./modules/Home/Index";

import { Routes, Route } from 'react-router-dom';
import About  from './modules/About/Index';
import Product from './modules/Product/Index';
import Services from './modules/Services/Index';

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
  ) 
}

export default App;
