import React from "react";

import * as C from "./index.styles";

const Hero = ({ movie }) => {
  return (
    <C.HeroContainer background={movie?.backdrop_path}>
      <C.HeroTitle>{movie?.name}</C.HeroTitle>
      <C.HeroDescription>{movie?.overview}</C.HeroDescription>
      <C.HeroButton>Assitir</C.HeroButton>
      <C.HeroButton>Minha lista</C.HeroButton>
    </C.HeroContainer>
  );
};

export default Hero;
