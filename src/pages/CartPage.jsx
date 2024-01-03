import React from 'react'
import { Wrap } from './CartPageStyles'
import CartProduct from '../components/cart/CartProduct'
import { useStore } from '../store/index'

const CartPage = () => {

  const cartItems = useStore(state => state.cartItems);

  // Calculate Total Price
  const totalPrice = cartItems.reduce((acc, item) => {
    return item.isChecked ? acc + (parseInt(item.price, 10) * item.quantity) : acc;
  }, 0);

  // Calculate Delivery Fee
  const deliveryFee = totalPrice < 30000 ? 3000 : 0;

  // Calculate Final Total
  const finalTotal = totalPrice + deliveryFee;

  // Number Formatting
  const formatNumber = (num) => {
    return new Intl.NumberFormat().format(num);
  };

  return (
    <Wrap>
      <div className="cart__container">
        <div className="cart__form">
          <h3>일반배송</h3>
          {
            cartItems.length > 0 ? 
            <div className='cart__table__wrap'>
            <div className="table__top">
              <div className="table__top__container">
                <span className='table__top--checkbox'></span>
                <span className='table__top--brand'>브랜드</span>
                <span className='table__top--title'>상품명</span>
                <span className='table__top--price'>구매가</span>
                <span className='table__top--amount'>수량</span>
                <span className='table__top--fee'>금액</span>
                <span className='table__top--select'>선택</span>
              </div>
            </div>
            <div className="table__body">
              {
                cartItems.map((val,idx)=>{
                  return (
                    <CartProduct key={idx} item={val} index={idx}/>
                  )          
                })
              }
            </div>
            <div className="table__bottom">
              <span className='table__bottom--total'>총 금액</span>
              <span className='table__bottom--cost'><b>{formatNumber(totalPrice)}</b>원</span>
              <span className='table__bottom--plus'>+</span>
              <span className='table__bottom--delivery'><b>{formatNumber(deliveryFee)}</b>원</span>
              <span className='table__bottom--delcost'></span>
              <span className='table__bottom--deltext'>(3만원이상 구매 시 무료배송)</span>
              <span className='table__bottom--equal'>=</span>
              <span className='table__bottom--paytotaltext'>결제 금액</span>
              <span className='table__bottom--paytotal'><b>{formatNumber(finalTotal)}</b>원</span>
            </div>
          </div>
            : 
          <div className="noItem">
            <p>장바구니가 비어 있습니다.</p>
          </div>
          }
          
          
        </div>
      </div>
    </Wrap>
  )
}

export default CartPage