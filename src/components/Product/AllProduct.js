import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from "../../productDetails/productDetails";
import Product from '../Product/Product';
import { useParams } from 'react-router-dom';
import Loading from '../../Loading';
import "./product.css"
import Pagination from 'react-js-pagination';

const AllProduct = () => {
  const dispatch = useDispatch();
  // const { keyword } = useParams();
  const {products, loading, error, searchData } = useSelector((state)=> state.app);
  useEffect(() => {
    if(error){
      return alert("Having problem loading the product data.", error)
    }
    dispatch(getProduct())
  }, [dispatch]);
  
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
        <div className="paginationBox">
          <Pagination
          activePage={currentPage}
          itemsCountPerPage={resultPerPage}
          totalItemsCount={products.length}
          nextPageText="Next"
          prevPageText="Prev"
          firstPageText="1st"
          lastPageText="Last"
          itemClass='page-item'
          linkClass='page-link'
          activeClass='pageItemActive'
          activeLinkClass='pageLinkActive'
          />
        </div>
      </>
    }
    </>
  )
}

export default AllProduct