import tw, { styled } from "twin.macro";

export const MoviesContainer = styled.div`
  ${tw`
    my-8
  `}
`;
export const MoviesTitle = styled.h2`
  ${tw`
      text-2xl
      font-bold
      uppercase
      mx-8
    `}
`;

export const MoviesRow = styled.div`
  ${tw`
      flex
      overflow-x-auto
      mt-4
      p-4
    `}

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MoviesPoster = styled.img`
  ${tw`
    m-2
    w-40
  `}

  // Aumenta a escala quando o usuario passa o mouse por cima. 
  transition: all 0.2s;
  &:hover {
    transform: scale(1.09);
  }
`;
