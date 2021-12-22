import tw, { styled } from "twin.macro";

export const HeaderContainer = styled.div`
  width: 99%;
  ${tw`
    flex
    justify-between
    p-4
    fixed
    top-0
    
    transition-all
    z-10
  `}

  ${(props) => (props.dark ? tw`bg-black` : tw`bg-transparent`)}

  img {
    ${tw`
      h-8
    `}
  }
`;
