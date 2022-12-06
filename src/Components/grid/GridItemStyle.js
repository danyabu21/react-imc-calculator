import styled from "styled-components";

export const GridItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.25rem;
  border-radius: 6px;
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  text-align: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 1.5rem;
  }

  div,
  h3,
  p,
  small {
    margin: 0px;
    color: #fff;
  }

  p {
    word-break: keep-all;
  }

  small {
    font-size: 0.875rem;
  }
`;
