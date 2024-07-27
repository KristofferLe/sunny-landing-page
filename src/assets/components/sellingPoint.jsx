import React from "react";
import styled from "styled-components";
import Egg from "../images/egg.jpg";
import Cup from "../images/cup.jpg";

const StyledSellingPoint = styled.section`
  display: flex;
  flex-direction: column;

  .transform,
  .audience {
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
    }
  }

  .audience {
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  .point {
    width: 100%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
      height: 312px;
    }

    .point-content {
      max-width: 470px;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 0 1rem;
      @media screen and (max-width: 768px) {
        scale: 75%;
      }

      h2 {
        font-size: 2.5rem;
      }

      p {
        font-family: sans-serif;
        font-size: 1rem;
        line-height: 2rem;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.5);
      }

      a {
        color: black;
        font-weight: bold;
        text-decoration: none;
        position: relative;

        &:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: -3px;
          width: 120px;
          height: 8px;
          opacity: 50%;
          border-radius: 1rem;
          background-color: ${({ color }) => color};
        }
      }
    }
  }

  .egg,
  .cup {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 600px;
    width: 100%;
    @media screen and (max-width: 768px) {
      height: 312px;
    }
  }

  .egg {
    background-image: url(${Egg});
  }

  .cup {
    background-image: url(${Cup});
  }

  article {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default function SellingPoint() {
  return (
    <StyledSellingPoint>
      <section className="transform">
        <article className="point">
          <span className="point-content">
            <h2>Transform your brand</h2>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <a href="#" target="_blank" rel="noreferrer" color="red">
              LEARN MORE
            </a>
          </span>
        </article>
        <span className="egg"></span>
      </section>
      <section className="audience">
        <span className="cup"></span>
        <article className="point">
          <span className="point-content">
            <h2>Stand out to the right audience</h2>
            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <a href="#" target="_blank" rel="noreferrer" color="yellow">
              LEARN MORE
            </a>
          </span>
        </article>
      </section>
    </StyledSellingPoint>
  );
}
