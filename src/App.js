import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import SingleProduct from './components/SingleProduct/SingleProduct';

const App = ()=>{
  return(
    <>
    <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<SingleProduct/>}/>
    </Routes>
    <Footer/>

    </Router>
    </>
  )
}

export default App;