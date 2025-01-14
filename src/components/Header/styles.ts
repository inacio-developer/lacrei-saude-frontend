import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  background: ${({ theme }) => theme["background-gradient-header"]};
`;
const Header = styled.header`
  display: flex;
  width: 100%;
  height: 9.6rem;
  justify-content: space-between;
  align-items: center;

  img {
    width: 16rem;
  }
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export { Section, Header, Ul };
