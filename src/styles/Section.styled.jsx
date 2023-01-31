import styled from "styled-components";

const Section = styled.section`
  max-height: 20px;
  overflow: hidden;
  width: 40%;
  padding: 4px;
  color: #ffffff;
  -webkit-transition: max-height 1s ease;
  -moz-transition: max-height 1s ease;
  -o-transition: max-height 1s ease;
  transition: max-height 1s ease;
  font: 12px Tahoma;
  &:hover {
    max-height: 200px;
  }
`;

export default Section;

export const Span = styled.span`
  color: #ff9900;
  display: block;
  margin-bottom: 5px;
`;