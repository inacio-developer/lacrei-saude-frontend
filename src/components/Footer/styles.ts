import Link from "next/link";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme["background-default"]};
  margin-top: 6.4rem;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-top: 4.8rem;
  padding-bottom: 2.4rem;
`;

const Ul = styled.ul`
  display: flex;
  gap: 2rem;
`;

const Line = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: ${({ theme }) => theme["background-accent"]};
  margin: 2rem 0;
`;

const Nav = styled.nav`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  align-items: flex-start;

  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Links = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.6rem;
  margin: 1.5rem 0;
`;

const Topic = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.text["xl-highlight"].size};
  font-weight: ${({ theme }) => theme.text["xl-highlight"].weight};
  color: ${({ theme }) => theme["color-text-body"]};
  margin-bottom: 0.8rem;
`;

const A = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme["color-text-body"]};

  &:visited {
    color: ${({ theme }) => theme["color-text-body"]};
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.8rem;
  font-size: ${({ theme }) => theme.text["xs"].size};
  color: ${({ theme }) => theme["color-text-helper"]};

  p:last-of-type {
    margin-top: 1.6rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export { Section, Footer, Ul, Line, Nav, Links, Topic, A, Div };
