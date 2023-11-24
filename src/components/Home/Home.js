import React, { useEffect } from 'react'
import "./Home.css";
import { CgMouse } from "react-icons/cg";
import Product from '../Product/Product';
import MetaData from '../metdata/MetaData';
import { getProduct } from "../../productDetails/productDetails"
import { useSelector, useDispatch } from "react-redux";
import Loading from '../../Loading';

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.app)
  // console.log("this product is from home components ", products)
if(error){
   alert("Something went wrong loading in this page.")
}
  useEffect(() => {
    dispatch(getProduct())

  }, [dispatch, error])


  return (
    <>
      {loading ? <Loading/>:
        <>
          <MetaData title="BuyAnything" />
          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>
          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
          </div>
        </>

      }

    </>

  )
}

export default Home