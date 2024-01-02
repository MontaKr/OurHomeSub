import React from 'react'
import { Wrap } from './NavStyles'
import Logo from "../../assets/logo_ourhome.png"
import PickUp from "../../assets/pickupOHTOGO_BI_pc.png"

const Nav = () => {
  return (
    <Wrap>
      <div className="top">
        <div className="top__container">
          <div className="top__left">
            <img src={Logo} alt="logo" />
          </div>
          <div className="top__middle">
            <span className='top__middle__wrap'>
              <input type="text" />
              <button></button>
            </span>
          </div>
          <div className="top__right">
            <div className="top__right__wrap">
              <div className="top__right__wrap__cart"></div>
              <div className="top__right__wrap__delivery"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom__container">
          <div className="bottom__leftmiddle">
            <div className="bottom__left">
              <div className="bottom__left--munu"></div>
              <button>전체 카테고리</button>
            </div>
            <ul className="bottom__middle">
              <li>정기배송</li>
              <li>베스트</li>
              <li>핫딜</li>
              <li>기획적</li>
              <li>혜택</li>
            </ul>
          </div>       
          <div className="bottom__right">
            <img src={PickUp} alt="pickup" />
          </div>
        </div>
      </div>
    </Wrap>
  )
}

export default Nav