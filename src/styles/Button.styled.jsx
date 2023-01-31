import styled from "styled-components";

export const Button = styled.button`
  background: linear-gradient(270deg, #bc19dd, #08f161);
  border-radius: 3px;
  border: none;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  transition: all 0.6s;
  &:hover {
    animation: buttonColor 3s infinite;
    transform: scale(1.1);

    @keyframes buttonColor {
      0% {
        background: linear-gradient(270deg, #bc19dd, #08f161);
      }
      50% {
        background: linear-gradient(90deg, #bc19dd, #08f161);
      }
      100% {
        background: linear-gradient(270deg, #bc19dd, #08f161);
      }
    }
  }
`;