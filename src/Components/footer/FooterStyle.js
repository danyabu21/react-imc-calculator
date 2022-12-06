import styled from "styled-components";

export const FooterWrapper = styled.footer`
  height: 10rem;
  width: 100%;
  text-align: center;
  position: absolute;
  left: 0;
  bottom: -5rem;

  p {
    padding-top: 5rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.neutralSecond};
  }

  @media (max-width: 870px) {
    bottom: -10rem;
  }

  @media (max-width: 500px) {
    bottom: -30rem;
  }


`;
