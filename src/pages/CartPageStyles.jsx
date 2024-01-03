import styled from "styled-components";

export const Wrap = styled.div`
  padding-top: 159px;

  .cart__container {
    /* background-color: aqua; */
    max-width: 1240px;
    width: 100%;
    margin: 0 auto;

    .cart__form {

      h3 {
        margin-top: 58px;
        margin: 78px 0 18px;
        font-size: 24px;
        font-weight: 600;
        line-height: 1.2;
      }

      .cart__table__wrap {
        /* background-color: tomato; */

        .table__top {
          box-sizing: border-box;
          width: 100%;
          border-top: 1px solid #000;
          border-bottom: 1px solid #eee;
          background-color: #fafafa;

          .table__top__container {
            position: relative;
            /* background-color: skyblue; */
            width: 100%;
            height: 65.8px;
            display: flex;
            align-items: center;
            box-sizing: border-box;

             & > span {
                position: relative;
                /* background-color: seagreen; */
                padding: 22px 15px;
                color: #000;
                font-weight: 400;
                font-size: 14px;
                text-align: center;
                box-sizing: border-box;
              }

              .table__top--checkbox {
                /* background-color: red; */
                width: 50px;
              }

              .table__top--brand {
                /* background-color: seagreen; */
                width: 10%;
              }

              .table__top--title {
                flex-grow: 1;
              }

              .table__top--price {
                width: 14%;
              }

              .table__top--amount {
                width: 10%;
              }

              .table__top--fee {
                width: 11%;        
              }

              .table__top--select {
                width: 124px;
              }
          }

          
        }



        .table__bottom {
          box-sizing: border-box;
          width: 100%;
          padding: 22px 20px;
          color: #000;
          text-align: center;
          border-bottom: 0;
          background: #fafafa;

          .table__bottom--total {
            margin-right: 10px;
            color: #000;
            text-align: center;
            font-size: 14px;
            font-weight: 400;
          }

          .table__bottom--cost {
            color: #000;
            text-align: center;
            font-size: 20px;
            font-weight: 400;

            b {
              font-size: 22px;
              font-weight: 600;
            }
          }

          .table__bottom--plus {
            position: relative;
            display: inline-block;
            width: 90px;
            margin-top: -7px;
            vertical-align: middle;
            overflow: hidden;
            text-indent: -9999px;

            &::before {
              content: '';
              position: absolute;
              top: 50%;
              left: 50%;
              width: 3px;
              height: 19px;
              margin: -9px 0 0 -2px;
              background: #b5b5b5;
            }

            &::after {
              content: '';
              position: absolute;
              top: 50%;
              left: 50%;
              background: #b5b5b5;
              width: 19px;
              height: 3px;
              margin: -1px 0 0 -10px;
            }
          }

          .able__bottom--delivery {
            margin-right: 10px;
            color: #000;
            text-align: center;
            font-size: 14px;
          }

          .table__bottom--delivery {
            font-size: 20px;
            font-weight: 400;
            color: #000;
            text-align: center;

            b {
              font-size: 22px;
              font-weight: 600;
            }
          }

          .table__bottom--deltext {
            color: #888;
            font-size: 14px;
            font-weight: 400;
          }

          .table__bottom--equal {
            position: relative;
            display: inline-block;
            width: 90px;
            margin-top: -7px;
            vertical-align: middle;
            overflow: hidden;
            text-indent: -9999px;

            &::before {
              content: '';
              position: absolute;
              top: 50%;
              left: 50%;
              width: 19px;
              height: 3px;
              margin: 0 0 0 -10px;
              background: #b5b5b5;
              margin-top: -4px;
            }

            &::after {
              content: '';
              position: absolute;
              top: 50%;
              left: 50%;
              width: 19px;
              height: 3px;
              margin: 0 0 0 -10px;
              background: #b5b5b5;
              margin-top: 4px;
            }
          }

          .table__bottom--paytotaltext {
            margin-right: 10px;
            color: #000;
            text-align: center;
            font-size: 14px;
            font-weight: 400;
          }

          .table__bottom--paytotal {
            font-size: 20px;
            color: #000;
            text-align: center;
            font-weight: 400;

            b {
              font-size: 22px;
              font-weight: 600;
            }
          }
        }
      }

      .noItem {
        margin-top: 40px;
        padding: 78px!important;
        text-align: center;
        background: #f7f7f7;

        p {
          color: #000;
          font-size: 20px;
          font-weight: 500;
        }
      }
    }
  }
`