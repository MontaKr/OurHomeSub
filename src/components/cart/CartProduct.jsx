import React from 'react'
import { Wrap } from './CartProductStyles'
import { useStore } from '../../store/index'

const CartProduct = ({item, index }) => {

  const removeFromCart = useStore(state => state.removeFromCart);
  const increaseQuantity = useStore(state => state.increaseQuantity);
  const decreaseQuantity = useStore(state => state.decreaseQuantity);
  const toggleItemChecked = useStore(state => state.toggleItemChecked);

  const handleCheckboxChange = () => {
    toggleItemChecked(index);
  };

  const handleRemove = () => {
    removeFromCart(index);
  };

  // Number Formatting
  const formatNumber = (num) => {
    return new Intl.NumberFormat().format(num);
  };

  return (
    <Wrap>
      <div className='check'>
        <span className='check__form'>
          <input 
          id={`cart-${index}`} 
          type="checkbox" 
          checked={item.isChecked} 
          onChange={handleCheckboxChange} />
          <label htmlFor={`cart-${index}`}></label>
        </span>
      </div>
      <div className='brand'>아워홈</div>
      <div className='title'>
        <div className="title__img">
          <img src={item.url} alt="productImg" />
        </div>
        <div className="title__text">
          <strong>
            {item.content}
          </strong>
        </div>
      </div>
      <div className='fee'>
        <span className='fee_price'><b>{formatNumber(item.price)}</b>원</span>
        <br />
        {item.originalPrice && (
          <del><b>{formatNumber(item.originalPrice)}</b>원</del>
        )}
      </div>
      <div className='amount'>
        <span className='amount__wrap'>
          <button className='amount__wrap__decrease' onClick={() => decreaseQuantity(index)}></button>
          <div className='amount__wrap__quantity'>{item.quantity}</div>
          <button className='amount__wrap__increase' onClick={() => increaseQuantity(index)}></button>
        </span>
      </div>
      <div className='price'>
        <span><b>{formatNumber(item.price * item.quantity)}</b>원</span>
      </div>
      <div className='select'>
        <button className='select__buy'>바로구매</button>
        <button className='select__erase' onClick={handleRemove}>삭제하기</button>
      </div>
    </Wrap>
  )
}

export default CartProduct