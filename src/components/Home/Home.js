import React from 'react'
import "./Home.css";
import { CgMouse } from "react-icons/cg";
import Product from '../Product/Product';
import MetaData from '../metdata/MetaData';

const Home = () => {
  const products = [{
    name:"Blue T-Shirt",
    _id: "this is sample id ",
    price:"₹300",
    color:"White",
    images:[{url:"https://img.freepik.com/premium-photo/portrait-handsome-confident-stylish-hipster-lambersexual-model-with-curly-hairstyle-sexy-man-dressed-jeans-white-tshirt-fashion-male-isolated-blue-wall-studio_158538-26575.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1698969600&semt=ais"}]
  }]
    return (
        <>
        <MetaData title="BuyAnything"/>
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
                <Product product={product} />
              ))}
          </div>
        </>
    )
}

export default Home