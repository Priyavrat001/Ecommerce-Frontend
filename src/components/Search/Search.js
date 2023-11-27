import React from 'react'
import MetaData from '../metdata/MetaData'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./search.css"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchProduct } from '../../productDetails/productDetails';

const Search = () => {
    const [keyword, setKeyword] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()
  
useEffect(() => {
 dispatch(searchProduct(keyword))
}, [keyword])

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
          navigate(`/products/${keyword}`);
        } else {
          navigate("/product");
        }
      };
    return (
        <>
      <MetaData title="Search A Product -- ECOMMERCE" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
        value={keyword}
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search"/>
      </form>
        </>
    )
}

export default Search