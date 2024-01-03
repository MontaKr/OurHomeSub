import styled from "styled-components";
import Check from "../../assets/ico_form.png"
import Amount from "../../assets/ico_amount.png"



export const Wrap = styled.div`
  background-color: bisque;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;

  & > div {
    padding: 15px 20px;
    vertical-align: middle;
    font-size: 14px;
    text-align: center;
    border-spacing: 0;
    box-sizing: border-box;
  }

  .check {
    /* background-color: red; */
    width: 50px;
    padding: 0;

    .check__form {
      display: inline-block;
      position: relative;
      max-width: 100%;
      vertical-align: middle;

      input {
        position: absolute;
        top: 0;
        left: 0;
        width: 25px;
        height: 25px;
        -webkit-appearance: none;
        appearance: none;
        border: 0;
        border-radius: 0;
        background: 0;
        box-shadow: none;
        opacity: 0;

        &:checked + label::before {
          background: #fb6c19 url(${Check}) 0 0 no-repeat;
        }
      }

      label {
        padding-left: 25px;
        overflow: hidden;
        text-indent: -9999px;
        display: block;
        min-height: 25px;
        padding: 2px 0 0 35px;
        font-size: 14px;
        cursor: pointer;

        &::before {
          content: '';
          box-sizing: border-box;
          position: absolute;
          top: 0;
          left: 0;
          width: 25px;
          height: 25px;
          border: 1px solid #b4b4b4;
          background: #fff;
          border-color: #fb6c19;
        }
      }
    }
  }

  .brand {
    /* background-color: seagreen; */
    width: 10%;
  }

  .title {
    /* background-color: aqua; */
    display: flex;
    align-items: center;
    flex-grow: 1;

    .title__img {
      display: inline-block;
      position: relative;
      width: 100px;
      vertical-align: middle;
      border: 1px solid #eee;

      img {
        max-width: 100%;
        border: 0;
        vertical-align: top;
      }
    }

    .title__text {
      margin-left: -105px;
      padding-left: 120px;
      max-width: 100%;

      strong {
        font-size: 16px;
        color: #000;
        font-weight: 400;
        display: -webkit-box;
        max-height: 4.5em;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        white-space: normal;
        word-break: normal;
      }
    }
  }

  .fee {
    /* background-color: chocolate; */
    width: 14%;
    display: flex;
    align-items: center;
    

    .fee_price {
      color: #000;
      font-size: 16px;
      margin-right: 5px;

      b {
        font-weight: 500;
        color: #000;
        font-size: 16px;
      }

      del {
        text-decoration: line-through;
        font-size: 14px;
        text-align: center;
        font-weight: 400;

        b {
          font-weight: 500;
          color: #000;
          font-size: 14px;
        }
      }
    }
  }

  .amount {
    width: 10%;

    .amount__wrap {
      display: inline-block;
      position: relative;
      padding: 0 24px;
      height: 24px;
      vertical-align: middle;
      background: #fff;

      .amount__wrap__decrease {
        position: absolute;
        left: 0;
        top: 0;
        width: 24px;
        height: 100%;
        overflow: hidden;
        text-indent: -9999px;
        border: 1px solid #e0e0e0;
        background: url(${Amount}) 0 0 no-repeat;
        cursor: pointer;
      }

      .amount__wrap__increase {
        right: 0;
        position: absolute;
        top: 0;
        width: 24px;
        height: 100%;
        overflow: hidden;
        text-indent: -9999px;
        border: 1px solid #e0e0e0;
        background: url(${Amount}) 0 0 no-repeat;
        background-position: 0 -22px;
        cursor: pointer;
      }

      .amount__wrap__quantity {
        width: 42px;
        height: 100%;
        color: #000;
        font-size: 14px;
        font-weight: 500;
        text-align: center;
        vertical-align: top;
        border: solid #e0e0e0;
        border-width: 1px 0;
        padding: 0 5px;
      }
    }
  }

  .price {
    width: 11%;

    span {
      color: #000;
      font-size: 16px;
      font-weight: 400;

      b {
        color: #000;
        font-size: 16px;
        font-weight: 500;
      }
    }
  }

  .select {
    width: 124px;

    .select__buy {
      min-width: 80px;
      margin: 0 0 0 0;
      color: #fff;
      border-color: #ff6500;
      background-color: #ff6500;
      height: 36px;
      padding: 0 11px;
      font-size: 14px;
      line-height: 35px;
      display: inline-block;
      position: relative;
      text-align: center;
      vertical-align: middle;
      border: 1px solid #aaa;
    }

    .select__erase {
      min-width: 80px;
      margin: 7px 0 0 0;
      height: 36px;
      padding: 0 11px;
      color: #888;
      font-size: 14px;
      line-height: 35px;
      display: inline-block;
      position: relative;
      text-align: center;
      vertical-align: middle;
      border: 1px solid #aaa;
      background-color: #fff;
      background: none;
      cursor: pointer;
      border-radius: 0;
    }
  }
`