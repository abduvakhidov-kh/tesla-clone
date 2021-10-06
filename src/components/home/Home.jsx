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
        title="Lowest Cost Solar Panels in America"
        desc="Money-back guarantee"
        lfbtn="Order now"
        rgbtn="Learn more"
        bgImage="solar-panel.jpg"
      />
      <Section
        title="Solar for New Roofs"
        desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        lfbtn="Order now"
        rgbtn="Learn more"
        bgImage="solar-roof.jpg"
      />
      <Section
        title="Accessories"
        lfbtn="Shop now"
        bgImage="accessories.jpg"
      />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;
