import styled from "styled-components";

export const ButtonWrapper = styled.button`
  background-color: ${({ theme }) => theme.colors.blueFirst};
  border: none;
  border-radius: 22px;
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.neutralFirst};
  width: 100%;
  outline: none;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 4rem;

  &:hover,
  &:focus {
    box-shadow: 0px 0px 1px 3px ${({ theme }) => theme.colors.blueThird},
      0px 0px 1px 4px ${({ theme }) => theme.colors.blueSecond};
  }

  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }

  @media (max-width: 500px) {
    margin-top: 1rem;
  }
`;
