import React from "react";
import styled from "styled-components";
import Emily from "../images/emily.svg";
import Thomas from "../images/thomas.svg";
import Jennie from "../images/jennie.svg";

const StyledTestimonialContainer = styled.section`
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
  gap: 8rem;

  h5 {
    color: rgba(0, 0, 0, 0.5);
    font-size: 1.5rem;
    letter-spacing: 0.6rem;
    font-family: fraunces, serif;
  }

  @media screen and (max-width: 768px) {
    height: 1200px;
    padding: 4rem 1rem;

    h5 {
      font-size: 1rem;
    }
  }

  .testimonials {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;

    justify-items: center;
    gap: 1rem;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 4rem;
    }
  }
`;

const StyledTestimonial = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 2rem;

  img {
    height: 72px;
  }
  p {
    line-height: 2rem;
    color: rgba(0, 0, 0, 0.5);
    font-family: sans-serif;
    font-weight: bold;
    max-width: 350px;
  }

  span {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h6 {
      font-size: 1rem;
    }
    small {
      font-weight: bold;
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;

function Testimonial({ img, name, test, fullName, role }) {
  return (
    <StyledTestimonial>
      <img src={img} alt={`profile image of ${name}`} />
      <p>{test}</p>
      <span>
        <h6>{fullName}</h6>
        <small>{role}</small>
      </span>
    </StyledTestimonial>
  );
}

export default function TestimonialContainer() {
  return (
    <StyledTestimonialContainer>
      <h5>CLIENT TESTIMONIALS</h5>
      <section className="testimonials">
        <Testimonial
          name="Emily"
          img={Emily}
          test="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          fullName="Emily. R"
          role="Marketing Director"
        />
        <Testimonial
          name="Thomas"
          img={Thomas}
          test="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
          fullName="Thomas. S"
          role="Chief Operating Officer"
        />
        <Testimonial
          name="Jennie"
          img={Jennie}
          test="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          fullName="Jennie. F"
          role="Business Owner"
        />
      </section>
    </StyledTestimonialContainer>
  );
}
