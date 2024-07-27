import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Hamburger from "../components/buttons/hamburger";
import { useMediaQuery } from "react-responsive";

const StyledHeader = styled.header`
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  align-items: center;
  color: white;
  position: relative;

  #logo {
    font-weight: 900;
    font-size: 2rem;
    font-family: montserrat, sans-serif;
  }

  #logo,
  a {
    cursor: pointer;
    color: white;
  }

  a {
    text-decoration: none;
    font-weight: 500;
    ${({ menuOpen }) =>
      menuOpen &&
      css`
        color: rgba(0, 0, 0, 0.5);
        font-size: 1.4rem;
      `}
  }

  nav {
    display: none;
    align-items: center;
    gap: 1.5rem;
    position: relative;

    .divider {
      background-color: white;
      width: 80px;
      height: 4rem;
      position: absolute;
      top: -24px;
      right: 0;
      clip-path: polygon(100% 0, 0 100%, 100% 100%);
    }

    ${({ menuOpen }) =>
      menuOpen &&
      css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        background-color: white;
        height: 329px;
        width: 90%;
        position: absolute;
        top: 8rem;
        z-index: 999;
      `}

    button {
      background-color: transparent;
      border: none;
      padding: 10px 15px;
      font-weight: bold;
      border-radius: 1rem;
      background-color: white;
      cursor: pointer;
      ${({ menuOpen }) =>
        menuOpen &&
        css`
          background-color: #fbd600;
          scale: 145%;
        `}
      &:hover {
        ${({ menuOpen }) =>
          menuOpen
            ? ""
            : "background-color: rgba(255, 255, 255, 0.2); color: white;"};
        box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.5);
      }
      transition: background-color 0.3s ease, color 0.3s ease,
        box-shadow 0.3s ease;
    }

    @media screen and (min-width: 768px) {
      display: flex;
    }
  }
`;

const navLinks = ["About", "Services", "Projects"];

const Logo = () => {
  return (
    <h1 id="logo" aria-label="company logo">
      sunnyside
    </h1>
  );
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };
  const isNotMobile = useMediaQuery({ query: "(min-width: 768px)" });
  useEffect(() => {
    if (isNotMobile) setMenuOpen(false);
  }, [isNotMobile]);
  return (
    <StyledHeader menuOpen={menuOpen}>
      <Logo />
      <nav role="navigation">
        {menuOpen && <span className="divider"></span>}
        {navLinks.map((link, key) => {
          return (
            <a
              aria-label={`link to the ${link} page`}
              href="#"
              key={key}
              target="_blank"
              tabIndex={0}
            >
              {link}
            </a>
          );
        })}
        <button role="button" aria-labe="to contact">
          CONTACT
        </button>
      </nav>
      <Hamburger onClick={toggleMenu} />
    </StyledHeader>
  );
}
