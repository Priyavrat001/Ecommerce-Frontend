import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSingleProduct } from '../../productDetails/productDetails'
import { useParams } from 'react-router-dom'
import "./singleProduct.css"
import MetaData from '../metdata/MetaData';
import ReactStars from "react-rating-stars-component";
import ReviewCard from './ReviewCard'
import Loading from '../../Loading'


const SingleProduct = () => {
  const { id } = useParams()
  const { product, loading, error } = useSelector((state) => state.app)
  const dispatch = useDispatch()
  useEffect(() => {
    if(error){
      return alert.error(error)
    }
    dispatch(getSingleProduct(id))
  }, [dispatch, id])

  const options = {
    edit:false,
    color:"rgb(20, 20, 20, 0.1)",
    activeColor:"tomato",
    size:window.innerWidh <600 ?20:25,
    value:product.ratings,
    inHalf:true,
  }
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const increaseQuantity = () => {
    if (product.Stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };
  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
   <>
   {loading? <Loading/>: (
     <>
     <MetaData title={`${product.name} -- ECOMMERCE`} />
     <div className="ProductDetails">
         <div>
           {product.images &&
             product.images.map((item, i) => (
               <img
                 className="CarouselImage"
                 key={i}
                 src={item.url}
                 alt={`${i} Slide`}
               />
             ))}
         </div>
         <div>
           
         <div>
               <div className="detailsBlock-1">
                 <h2>{product.name}</h2>
                 <p>Product # {product._id}</p>
               </div>
               <div className="detailsBlock-2">
               <ReactStars {...options}/> 
                 <span className="detailsBlock-2-span">
                   {" "}
                   ({product.numOfReviews} Reviews)
                 </span>
               </div>
               <div className="detailsBlock-3">
                 <h1>{`₹${product.price}`}</h1>
                 <div className="detailsBlock-3-1">
                   <div className="detailsBlock-3-1-1">
                     <button onClick={decreaseQuantity}>-</button>
                     <input readOnly type="number" value={quantity} />
                     <button onClick={increaseQuantity}>+</button>
                   </div>
                   <button
                     disabled={product.Stock < 1 ? true : false}
                     // onClick={addToCartHandler}
                   >
                     Add to Cart
                   </button>
                 </div>
 
                 <p>
                   Status:
                   <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                     {product.Stock < 1 ? "OutOfStock" : "InStock"}
                   </b>
                 </p>
               </div>
 
               <div className="detailsBlock-4">
                 Description : <p>{product.description}</p>
               </div>
               <button onClick={submitReviewToggle} className="submitReview">
                 Submit Review
               </button>
         </div>
       </div>
       </div>
       <h3 className="reviewsHeading">REVIEWS</h3>
       {product.reviews && product.reviews[0] ? (
             <div className="reviews">
               {product.reviews &&
                 product.reviews.map((review) => (
                   <ReviewCard key={review._id} review={review} />
                 ))}
             </div>
           ) : (
             <p className="noReviews">No Reviews Yet</p>
           )}
       
     </>
   )}
   </>
  )
}

export default SingleProduct