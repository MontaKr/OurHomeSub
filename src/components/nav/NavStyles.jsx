import styled from "styled-components";
import Tool from "../../assets/ico_tool.png"
import Search from "../../assets/ico_search.png"
import Menu from "../../assets/ico_menu.png"
import Transport from "../../assets/ico_delivery_pc.gif"

export const Wrap = styled.div`
  width: 100vw;
  height: 159px;
  background-color: tomato;

  .top {
    position: relative;
    /* background-color: seagreen; */
    height: 65%;

    .top__container {
      margin: 0 auto;
      /* background-color: aqua; */
      width: 85%;
      height: 100%;
      display: flex;
      align-items: center;

      .top__left {
        /* background-color: salmon; */
        width: 20%;
        height: 100%;
        
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      .top__middle {
        /* background-color: azure; */
        width: 60%;
        height: 100%;
        display: flex;
        align-items: center;

        .top__middle__wrap {
          position: relative;
          background-color: #f2f2f2;
          width: 372px;
          height: 40px;
          border-radius: 50px;
          margin-left: 40px;

          input {
            background-color: #f2f2f2;
            width: 292px;
            height: 40px;
            padding: 0 60px 0 20px;
            border-radius: 50px;
            border : 0;
            outline: 0;
          }

          button {
            position: absolute;
            top: 0;
            right: 15px;
            background-image: url(${Search});
            width: 40px;
            height: 100%;
            background-repeat: no-repeat;
            background-position: center;
            outline: none;
            border: 0;
            cursor: pointer;
          }
        }
      }

      .top__right {
        /* background-color: tan; */
        position: relative;
        width: 20%;
        height: 100%;

        .top__right__wrap {
          /* background-color: lime; */
          position: absolute;
          right: 0;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          width: 70%;
          height: 100%;

          .top__right__wrap__cart {
            position: relative;
            background-image: url(${Tool});
            background-repeat: no-repeat;
            width: 60px;
            height: 40px;

            &::after {
              content: "";
              position: absolute;
              right: 0;
              top: 50%;
              transform: translateY(-50%);
              width: 1px;
              height: 20px;
              background-color: #e6e6e6;
            }
          }

          .top__right__wrap__delivery {
            background-image: url(${Tool});
            background-repeat: no-repeat;
            background-position: 0 -40px;
            width: 60px;
            height: 40px;

            &::before {
              content: "로그인/회원가입 고객센터";
              position: absolute;
              right: 20px;
              bottom: 80px;
              font-size: 14px;
              color: #666;
              width: 180px;
            }
          }
        }
      }
    }
  }

  .bottom {
    /* background-color: skyblue; */
    border-top: 1px solid #e6e6e6;
    height: 35%;

    .bottom__container {
      /* background-color: teal; */
      margin: 0 auto;
      width: 85%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .bottom__leftmiddle {
        display: flex;
        align-items: center;
        height: 100%;

        .bottom__left {
          /* background-color: coral; */
          float: left;
          width: 200px;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          border: solid #e6e6e6;
          border-width: 0 1px;

          .bottom__left--munu {
            background-image: url(${Menu});
            background-repeat: no-repeat;
            background-position: center;
            width: 19px;
            height: 16px;
            margin: -2px 10px 0 0;
          }
          
          button {
            font-weight: 600;
            font-size: 18px;
            background: none;
            border: 0;
          }
        }

        .bottom__middle {
          /* background-color: salmon; */
          width: 420px;
          height: 100%;
          padding-left: 32px;
          display: block;

          li {
            display: inline-block;
            margin-left: 33px;
            color: #000;
            font-size: 18px;
            font-weight: 600;
            line-height: 58px;
            position: relative;

            &:nth-child(1)::before {
              content: "";
              position: absolute;
              left: -40px;
              top: 9px;
              width: 41px;
              height: 40px;
              background-image: url(${Transport});
            }
          }
        }
      }

      .bottom__right {
        /* background-color: bisque; */
        float: right;
        width: 119px;
        height: 58px;
        padding: 0 32px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
`