import React from "react";
import styled from "styled-components";
import Plates from "../images/plates.jpg";
import Sugar from "../images/sugar.jpg";
import Bottles from "../images/bottles.jpg";
import Cone from "../images/cone.jpg";

const StyledGallery = styled.section`
  height: 447px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;

  img {
    height: 447px;
    width: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 188px);

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export default function Gallery() {
  return (
    <StyledGallery>
      <img src={Plates} alt={`image of ${Plates}`} />
      <img src={Sugar} alt={`image of ${Sugar}`} />
      <img src={Bottles} alt={`image of ${Bottles}`} />
      <img src={Cone} alt={`image of ${Cone}`} />
    </StyledGallery>
  );
}
