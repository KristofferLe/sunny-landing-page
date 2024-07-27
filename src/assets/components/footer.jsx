import React from "react";
import styled from "styled-components";
import { FaFacebookSquare as FB } from "react-icons/fa";
import { FaSquareInstagram as IG } from "react-icons/fa6";
import { FaSquareTwitter as Twitter } from "react-icons/fa6";
import { FaPinterestSquare as Pint } from "react-icons/fa";

const StyledFooter = styled.footer`
  height: 350px;
  background-color: #90d4c6;
  color: #458d7e;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;

  h6 {
    font-family: montserrat, sans-serif;
    font-size: 3rem;
    font-weight: 900;
  }

  ul {
    display: flex;
    gap: 6rem;
    align-items: center;
  }

  a {
    color: #2c7566;
    cursor: pointer;
    font-weight: 600;
    text-decoration: none;
    &:hover {
      color: white;
    }
    transition: color 0.3s ease;
  }

  .socials {
    gap: 2rem;
    font-size: 2rem;
    margin-top: 2rem;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <h6>sunnyside</h6>
      <ul>
        <a href="#" target="_blank" rel="noreferrer">
          About
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          Services
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          Products
        </a>
      </ul>
      <ul className="socials">
        <a
          aria-label="link to the facebook page"
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          <FB />
        </a>
        <a
          aria-label="link to the instagram page"
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          <IG />
        </a>
        <a
          aria-label="link to the twitter page"
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter />
        </a>
        <a
          aria-label="link to the pinterest page"
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          <Pint />
        </a>
      </ul>
    </StyledFooter>
  );
}
