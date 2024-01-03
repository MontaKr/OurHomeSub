import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
  /* background-color: aqua; */
  width: 100vw;

  .list__container {
    /* background-color: wheat; */
    max-width: 1240px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`