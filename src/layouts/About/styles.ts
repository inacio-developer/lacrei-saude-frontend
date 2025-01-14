import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 12.8rem;
`;

const H1 = styled.h1`
  font-size: ${({ theme }) => theme.headline.base.size};
  font-weight: ${({ theme }) => theme.headline.base.weight};
  @media only screen and (max-width: 700px) {
    font-size: ${({ theme }) => theme.headline["sm-highlight"].size};
  }

  @media only screen and (max-width: 500px) {
    text-align: center;
  }
`;

const Line = styled.div`
  width: 20%;
  height: 0.12rem;
  background-color: ${({ theme }) => theme["background-accent"]};
  margin: 2rem 0;
`;

const H3 = styled.h3`
  font-size: ${({ theme }) => theme.headline.sm.size};
  font-weight: ${({ theme }) => theme.headline.sm.weight};
  margin-top: 1.6rem;
  margin-bottom: 3.2rem;

  @media only screen and (max-width: 700px) {
    font-size: ${({ theme }) => theme.text.base.size};
  }

  @media only screen and (max-width: 500px) {
    text-align: center;
    font-size: 1.4rem;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;
  flex-wrap: wrap;

  @media only screen and (max-width: 700px) {
    justify-content: center;
  }
`;

export { Section, H1, Line, H3, Div };
