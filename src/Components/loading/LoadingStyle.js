import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }

`;

export const LoadingWrapper = styled.div`
  width: 40px;
  height: 40px;
  border: 10px solid ${({ theme }) => theme.colors.neutralSecond};
  border-top-color: #fff;
  border-radius: 50%;
  animation: ${rotate} ease-in-out 1s infinite;
`;
