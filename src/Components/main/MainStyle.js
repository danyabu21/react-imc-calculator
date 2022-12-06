import styled from "styled-components";

export const MainWrapper = styled.main`
  max-width: 1160px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  gap: 4rem;

  @media (max-width: 870px) {
    flex-direction: column;
  }

  @media (max-width: 500px) {
    padding: 0 2rem;
  }
`;

export const SectionLeft = styled.section`
  flex: 1;

  h1 {
    color: ${({ theme }) => theme.colors.neutralThird};
    margin-bottom: 1.5rem;
    font-size: 3rem;

    @media (max-width: 500px) {
      font-size: 2rem;
    }
  }

  .imcDescription {
    color: ${({ theme }) => theme.colors.neutralFourth};
    margin-bottom: 2.5rem;
    line-height: 1.4;

    @media (max-width: 500px) {
      margin-bottom: 1.5rem;
    }
  }
`;

export const SectionRigth = styled.section`
  flex: 1;
  display: grid;
  grid-template-columns: ${({ result }) => result || "repeat(2, 1fr)"};
  gap: 1rem;
  place-items: center;
  position: relative;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
