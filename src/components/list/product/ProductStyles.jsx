import styled from "styled-components";
import Hover from "../../../assets/ico_item_tool.png"

export const Wrap = styled.li`
  /* background-color: olive; */
  width: calc(25% - 32px);
  margin: 15px 16px;
  list-style: none;
  position: relative;

  .product__wrap {

    &::before {
      content: '${props => props.index + 1}';
      display: block;
      margin-bottom: 10px;
      color: #000;
      font-size: 32px;
      font-weight: 600;
      line-height: 1;
    }
    
    .product__wrap__img__container {
      border : 1px solid #eee;
      overflow: hidden;

      img {
        max-width: 100%;
        vertical-align: top;
        overflow-clip-margin: content-box;
        overflow: clip;
      }
    }

    .product__wrap__content__container {
      margin-top: 18px;

      strong {
        color: #000;
        font-size: 17px;
        font-weight: 400;
        max-height: 3em;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        white-space: normal;
        word-break: normal;
      }

      p {
        display: block;
        margin-top: 2px;
        color: #888;
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .content__container__price__wrap {
        margin-top: 10px;
        vertical-align: bottom;

        .price__wrap--price {
          color: #000;
          line-height: 1;
          font-size: 26px;
          font-weight: 600;
        }

        .price__wrap--originalPrice {
          margin-left: 3px;
          color: #666;
          font-size: 16px;
          font-weight: 500;
          line-height: 1;
          text-decoration: line-through;
        }

        .price__wrap--bargain {
          margin-left: 3px;
          color: #ff6500;
          font-size: 16px;
          font-weight: 500;
          line-height: 1;
        }
      }
    }
  }

  .product__hover {
    position: absolute;
    top: 42px;
    left: 0;
    width: 100%;
    padding: calc(100% - 63px) 0 21px 0;
    text-align: center;
    opacity: 0;
    transition: opacity .3s ease-in-out;

    &:hover {
      opacity : 1;
    }

    .product__hover--cart {
      display: inline-block;
      position: relative;
      width: 42px;
      height: 42px;
      margin: 0 2px;
      overflow: hidden;
      text-indent: -9999px;
      background: url(${Hover}) 0 0 no-repeat;
      z-index: 1;
      border: none;
      cursor: pointer;
    }

    .product__hover--like {
      display: inline-block;
      position: relative;
      width: 42px;
      height: 42px;
      margin: 0 2px;
      overflow: hidden;
      text-indent: -9999px;
      background: url(${Hover}) 0 0 no-repeat;
      background-position: 0 -42px;
      transition: opacity .3s ease-in-out;
      z-index: 1;
      border: none;
      cursor: pointer;
    }

    .product__hover--compare {
      display: inline-block;
      position: relative;
      width: 42px;
      height: 42px;
      margin: 0 2px;
      overflow: hidden;
      text-indent: -9999px;
      background: url(${Hover}) 0 0 no-repeat;
      background-position: 0 -84px;
      transition: opacity .3s ease-in-out;
      z-index: 1;
      border: none;
      cursor: pointer;
    }
  }
`