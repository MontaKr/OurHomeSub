import React from 'react'
import { Wrap } from './ProductStyles'
import { useStore } from '../../../store/index';

const Product = ({ details, index }) => {

  const addToCart = useStore(state => state.addToCart);

  const handleAddToCart = () => {
    console.log("Adding to cart:", details); 
    addToCart(details);
  };

  // Number Formatting
  const formatNumber = (num) => {
    return new Intl.NumberFormat().format(num);
  };

  return (
    <Wrap index={index}>
      <div className="product__wrap">
        <div className="product__wrap__img__container">
          <img src={details.url} alt={details.name} />
        </div>
        <div className="product__wrap__content__container">
          <strong>{details.name}</strong>
          <p>{details.content}</p>
          <div className="content__container__price__wrap">
            {details.originalPrice && details.bargain ?
            <>
              <span className='price__wrap--price'>{formatNumber(details.price)}원</span> 
              <del className='price__wrap--originalPrice'>{formatNumber(details.originalPrice)}원</del>
              <em className='price__wrap--bargain'>{details.bargain}%</em>
            </>
            
            : 
            <span className='price__wrap--price'>{formatNumber(details.price)}원</span>}
          </div>
        </div>
      </div>
      <div className="product__hover">
        <button className='product__hover--cart' onClick={handleAddToCart}></button>
        <button className='product__hover--like'></button>
        <button className='product__hover--compare'></button>
      </div>
    </Wrap>
  )
}

export default Product