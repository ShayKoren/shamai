
import React from 'react';

import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import Hero from './components/HERO';
import Products from './components/Products';
import {productData,productData2} from './components/Products/Data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Contact from './components/contact/Contact';


function App() {
  return (
    <Router>
    <GlobalStyle/>
    <Hero/>
    <Products heading="" data={productData2}/>
    <Products heading='השרותים שלי' data={productData}/>
    <Feature/>
    <Contact/>
    <Footer/>
    </Router>
  );
}

export default App;
