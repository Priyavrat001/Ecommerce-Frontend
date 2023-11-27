import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import SingleProduct from './components/SingleProduct/SingleProduct';
import AllProduct from './components/Product/AllProduct';
import Search from './components/Search/Search';

const App = ()=>{
  return(
    <>
    <Router>
    <Header/>
    <Routes>
      <Route exat path='/' element={<Home/>}/>
      <Route exat path='/product/:id' element={<SingleProduct/>}/>
      <Route exat path='/product' element={<AllProduct/>}/>
      <Route path='/products/:keyword' element={<AllProduct/>}/>
      <Route exat path='/search' element={<Search/>}/>
    </Routes>
    <Footer/>

    </Router>
    </>
  )
}

export default App;