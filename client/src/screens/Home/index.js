import React from "react";
import { useLocation } from "react-router-dom";
import { Container } from "./styles";

const Home = () => {
  const location = useLocation();
  console.log(location)
  return <Container>Homeee</Container>;
};

export default Home;
