import styled from "styled-components";

export const BackButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: -25px;
  border-radius: 50%;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.blueFirst};
  transition: all 0.2s;
  width: 50px;
  height: 50px;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.blueSecond};
  }

  @media (max-width: 870px) {
    top: 0px;
    left: 0px;
    border-radius: 6px;
    transform: rotate(90deg);
  }
`;
