import React from "react";
import "./App.css";
import styled from "styled-components";
import Banner from "./assets/components/banner";
import SellingPoint from "./assets/components/sellingPoint";
import Info from "./assets/components/info";
import TestimonailContainer from "./assets/components/testimonials";
import Gallery from "./assets/components/gallery";
import Footer from "./assets/components/footer";

const StyledApp = styled.main`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <StyledApp>
      <Banner />
      <SellingPoint />
      <Info />
      <TestimonailContainer />
      <Gallery />
      <Footer />
    </StyledApp>
  );
}

export default App;
