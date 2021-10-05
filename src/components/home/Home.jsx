import React from "react";
import styled from "styled-components";
import Section from "../section/Section";

export default function Home() {
  return (
    <Container>
      <Section 
        title="Model S"
        desc="Order Online for Touchless Delivery"
        lfbtn="Custom Order"
        rgbtn="Existing Inventory"
        bgImage="model-s.jpg"
      />
      <Section 
        title="Model 3"
        desc="Order Online for Touchless Delivery"
        lfbtn="Custom Order"
        rgbtn="Existing Inventory"
        bgImage="model-3.jpg"
      />
      <Section 
        title="Model X"
        desc="Order Online for Touchless Delivery"
        lfbtn="Custom Order"
        rgbtn="Existing Inventory"
        bgImage="model-x.jpg"
      />
      <Section 
        title="Model Y"
        desc="Order Online for Touchless Delivery"
        lfbtn="Custom Order"
        rgbtn="Existing Inventory"
        bgImage="model-y.jpg"
      />
      <Section 
        title="Model Y"
        desc="Order Online for Touchless Delivery"
        lfbtn="Custom Order"
        rgbtn="Existing Inventory"
        bgImage="model-y.jpg"
      />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;
