import React from "react";
import styled from "styled-components";

export default function Section() {
  return (
    <Wrap>
      <ItemText>
        <h1>Model S</h1>
        <p>Order Online for Touchless Delivery</p>
      </ItemText>
      <ButtonGroup>
        <LeftButton>Custom Order</LeftButton>
        <RightButton>Existing Inventory</RightButton>
      </ButtonGroup>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/images/model-3.jpg");
  background-repeat: no-repeat;
  background-size: center;
  background-position: center;
`;
const ButtonGroup = styled.div``;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightButton = styled(LeftButton)``;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
