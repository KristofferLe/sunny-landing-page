import React from "react";
import styled from "styled-components";

const StyledHamburger = styled.aside`
  display: none;
  gap: 7px;
  padding: 1rem;
  cursor: pointer;

  .bar {
    width: 2rem;
    height: 0.13rem;
    background-color: white;
  }

  @media screen and (max-width: 768px) {
    display: grid;
  }
`;

export default function Hamburger({ onClick }) {
  return (
    <StyledHamburger
      onClick={onClick}
      aria-label="toggle button for mobile menu"
      role="button"
      tabIndex={0}
      aria-controls="mobile-menu"
      aria-expanded="false"
      aria-haspopup="true"
    >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </StyledHamburger>
  );
}
