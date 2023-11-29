import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from "../../productDetails/productDetails";
import Product from '../Product/Product';
import { useParams } from 'react-router-dom';
import Loading from '../../Loading';
import "./product.css"
import Pagination from 'react-js-pagination';
import { Slider, Typography } from '@mui/material';

const categories = [
  "Laptop",
  "Footwear",
  "Bottom",
  "Tops",
  "Attire",
  "Camera",
  "SmartPhones",
];
const AllProduct = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);
  const [price, setPrice] = useState([0, 25000]);
  // const resultPerPage = 5

  const dispatch = useDispatch();
  const {products, loading, error, searchData } = useSelector((state)=> state.app);
  useEffect(() => {
    if(error){
      return alert("Having problem loading the product data.", error)
    }
    dispatch(getProduct({price, category, ratings}))
  }, [dispatch, price, error, category, ratings]);

  // const setCurrentPageNo = (e) => {
  //   setCurrentPage(e);
  // };
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  
  return (
    <>
    {loading? <Loading/>: 
      <>
       <h2 className="productsHeading">Products</h2>
        <div className="products">
        {products &&
         products.filter((e)=>{
                    if(searchData.length === 0){
                        return e 
                    }
                    else{
                        return e.name.toLowerCase().includes(searchData.toLowerCase())
                    }
                }).map((product) => (
                <Product key={product.id} product={product} />
              ))}
        </div>

        <div className="filterBox">
        <Typography>Price</Typography>
        <Slider
          value={price}
          onChange={priceHandler}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={0}
          max={25000}
        />
        
        <Typography>Categories</Typography>
        <ul className="categoryBox">
          {categories.map((category) => (
            <li
              className="category-link"
              key={category}
              onClick={() => setCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
        <fieldset>
          <Typography component="legend">Ratings Above</Typography>
          <Slider
            value={ratings}
            onChange={(e, newRating) => {
              setRatings(newRating);
            }}
            aria-labelledby="continuous-slider"
            valueLabelDisplay="auto"
            min={0}
            max={5}
          />
        </fieldset>
        </div>

        <div className="paginationBox">
          {/* <Pagination
          activePage={currentPage+1}
          itemsCountPerPage={resultPerPage}
          totalItemsCount={products.length}
          onChange={setCurrentPageNo}
          nextPageText="Next"
          prevPageText="Prev"
          firstPageText="1st"
          lastPageText="Last"
          itemClass='page-item'
          linkClass='page-link'
          activeClass='pageItemActive'
          activeLinkClass='pageLinkActive'
          /> */}
        </div>
      </>
    }
    </>
  )
}

export default AllProduct