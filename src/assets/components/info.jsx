import React from "react";
import styled from "styled-components";
import Cherry from "../images/cherry.png";
import Tangerine from "../images/tangerine.jpg";

const StyledInfo = styled.section`
  height: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 600px;
  color: black;
  text-align: center;
  @media screen and (max-width: 768px) {
    height: 1200px;
    grid-template-columns: 1fr;
    grid-template-rows: 600px 600px;
  }

  .cherry,
  .tangerine {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    gap: 2rem;
    font-weight: bold;
    letter-spacing: 2px;

    h5,
    p {
      max-width: 400px;
      transform: translateY(-5rem);
    }

    h5 {
      font-size: 2rem;
      color: rgba(0, 0, 0, 0.7);
    }

    p {
      font-family: sans-serif;
      color: rgba(0, 0, 0, 0.5);
      padding: 0rem 1rem;
    }
  }

  .cherry {
    background-image: url(${Cherry});
  }
  .tangerine {
    background-image: url(${Tangerine});
  }
`;

export default function Info() {
  return (
    <StyledInfo>
      <section className="cherry">
        <h5>Graphic Design</h5>
        <p>
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.
        </p>
      </section>
      <section className="tangerine">
        <h5>Photography</h5>
        <p>
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </section>
    </StyledInfo>
  );
}
