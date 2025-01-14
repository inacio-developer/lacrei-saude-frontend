import styled from "styled-components";

interface FringeProps {
  backgroundurl: string;
}

const Section = styled.section`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme["background-highlight"]};
  padding: 8rem 0;
  margin-top: 12.8rem;
`;

const Div = styled.div`
  width: 100%;
  height: 28.7rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme["background-default"]};
  padding: 4rem 3.2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 4px 4px 4px;
`;

const H4 = styled.h2`
  font-size: ${({ theme }) => theme.headline.lg.size};
  font-weight: ${({ theme }) => theme.headline.lg.weight};
  text-align: left;

  @media only screen and (max-width: 300px) {
    display: none;
  }
`;

const P = styled.p`
  font-weight: ${({ theme }) => theme.headline.sm.weight};
  border-left: 0.2rem solid ${({ theme }) => theme["background-accent"]};
  padding-left: 1.6rem;
  line-height: 150%;
  margin-top: 1.6rem;
  margin-bottom: 3.2rem;
  color: ${({ theme }) => theme["color-text-body"]};
  span:first-of-type {
    display: block;
    margin-bottom: 1.2rem;
  }
`;

const Fringe = styled.div<FringeProps>`
  position: absolute;
  width: 100%;
  height: 1rem;
  background-image: url(${(props) => props.backgroundurl});
  bottom: 0;
  background-color: ${({ theme }) => theme["background-default"]};
`;

export { Section, Div, H4, P, Fringe };
