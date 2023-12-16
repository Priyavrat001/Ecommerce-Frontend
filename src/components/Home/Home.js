import React, { useEffect, useState } from 'react'
import "./Home.css";
import { CgMouse } from "react-icons/cg";
import Product from '../Product/Product';
import MetaData from '../metdata/MetaData';
// import { getall } from "../../productDetails/productDetails"
// import { useSelector, useDispatch } from "react-redux";
import Loading from '../../Loading';

const Home = () => {
  const [products, setProducts] = useState();
  const loading = false;
  useEffect(() => {
    const fetchData = async()=>{
      try {
        const response = await fetch("http://localhost:5000/api/product/getallproduct");
      const result = await response.json();
      setProducts(result);
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])
  


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