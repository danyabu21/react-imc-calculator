import styled from "styled-components";

export const InputWrapper = styled.div`
  input {
    padding: 0.5rem 0.1rem;
    width: 100%;
    margin-bottom: 1rem;
    border: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    caret-color: ${({ theme }) => theme.colors.neutralThird};
    color: ${({ theme }) => theme.colors.neutralThird};
    outline: none;
    font-size: 1rem;
    border-radius: 4px 4px 0 0;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.neutralFifth};
    }
  }
`;
