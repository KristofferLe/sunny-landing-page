import React from "react";
import styled from "styled-components";
import Orange from "../images/orange.png";
import Header from "./header";
import Arrow from "../images/arrow.svg";

const StyledBanner = styled.section`
  height: 538px;
  width: 100%;
  background-image: url(${Orange});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1rem;

  .hero {
    align-self: center;

    font-weight: black;
    color: white;
    font-size: 2rem;
    letter-spacing: 5px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;

    @media screen and (min-width: 768px) {
      font-size: 2.5rem;
      gap: 6rem;
      transform: translateY(3.5rem);
    }
  }

  @media screen and (min-width: 768px) {
    height: 800px;
  }
`;

const Hero = () => {
  return (
    <section className="hero">
      <h2>WE ARE CREATIVES</h2>
      <img src={Arrow} alt="arrow icon" />
    </section>
  );
};

export default function Banner() {
  return (
    <StyledBanner>
      <Header />
      <Hero />
    </StyledBanner>
  );
}
