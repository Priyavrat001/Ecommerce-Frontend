import React from 'react';
import ReactStars from "react-rating-stars-component";
import {Link} from 'react-router-dom';

const Product = ({product}) => {
  const options = {
    edit:false,
    color:"rgb(20, 20, 20, 0.1)",
    activeColor:"tomato",
    size:window.innerWidh <600 ?20:25,
    value:2.5,
    inHalf:true,

  }
  return (
    <>
    <Link className='productCard' to={product._id}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <ReactStars {...options}/> <span>256views</span>
      </div>
      <span>{product.price}</span>
    </Link>
    </>
  )
}

export default Product