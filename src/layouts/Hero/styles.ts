import styled from "styled-components";

interface SectionProps {
  backgroundurl: string;
}

const Section = styled.section<SectionProps>`
  position: relative;
  width: 100%;
  background-image: url(${(props) => props.backgroundurl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 16.2rem 0;
  line-height: 3.6rem;
`;

const Overlayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme["background-default"]};
  opacity: 0.9;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 3;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const Span = styled.span`
  font-size: ${({ theme }) => theme.text.base.size};
  font-weight: ${({ theme }) => theme.text.base.weight};
`;

const H1 = styled.h1`
  font-size: ${({ theme }) => theme.headline.xl.size};
  color: ${({ theme }) => theme["color-text-accent"]};
  margin: 2rem 0;
  line-height: 5.8rem;

  @media only screen and (max-width: 410px) {
    font-size: ${({ theme }) => theme.headline.lg.size};
  }
`;

const P = styled.p`
  display: block;
  width: 49rem;
  font-size: 2.4rem;
  color: ${({ theme }) => theme["text-color-body"]};

  @media only screen and (max-width: 700px) {
    width: 40rem;
  }

  @media only screen and (max-width: 410px) {
    font-size: 1.8rem;
    width: 30rem;
  }

  @media only screen and (max-width: 350px) {
    width: 28rem;
  }
`;

export { Section, Overlayer, Div, Span, H1, P };
