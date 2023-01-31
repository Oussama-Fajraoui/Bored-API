import styled from "styled-components";

const MainDiv = styled.div`
  position: relative;
  width: 30rem;
  height: 33rem;
  text-align: center;
  color: #252b37;
  background-color: rgba(21, 24, 35, 0.7);
  animation: textColor 10s ease infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;

  /* justify-content: center; */

  &::after {
    position: absolute;
    content: "";
    top: 5vw;
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    transform: scale(1.75);
    -webkit-filter: blur(5vw);
    -moz-filter: blur(5vw);
    -ms-filter: blur(5vw);
    filter: blur(5vw);
    background: linear-gradient(270deg, #bc19dd, #08f161);
    background-size: 200% 200%;
    animation: animateGlow 10s ease infinite;
  }
  @keyframes animateGlow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes textColor {
    0% {
      color: #7e0fff;
    }
    50% {
      color: #0fffc1;
    }
    100% {
      color: #7e0fff;
    }
  }
`;

export default MainDiv;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: monospace;
  justify-content: center;
  /* background-color: rgba(29, 33, 43, 0.4); */
  /* height: 100vh; */
  overflow: hidden;
  margin-top: 70px;
`;