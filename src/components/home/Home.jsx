import React from "react";
import styled from "styled-components";
import Section from "../section/Section";

export default function Home() {
  return (
    <Container>
      <Section />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;
