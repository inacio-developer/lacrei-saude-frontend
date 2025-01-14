import styled from "styled-components";

const Section = styled.section`
  margin-top: 12.8rem;
  min-height: 45rem;
`;

const H1 = styled.h1`
  font-size: ${({ theme }) => theme.headline.xl.size};
  color: ${({ theme }) => theme["color-text-accent"]};
  margin: 4.8rem 0 1.5rem 0;
`;

const P = styled.p`
  display: block;
  color: ${({ theme }) => theme["text-color-body"]};
  margin-bottom: 4rem;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1.6rem;
  transition: 0.2 ease-in;
`;

const Question = styled.button`
  width: 100%;
  font-family: ${({ theme }) => theme["family-primary"]};
  font-size: ${({ theme }) => theme.text.base.size};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem;
  background-color: ${({ theme }) => theme["background-default"]};
  border: 1px solid ${({ theme }) => theme["color-border-body"]};
  border-radius: 0.8rem;
  cursor: pointer;
`;

const Response = styled.div`
  padding: 1.2rem;
  border: 1px solid ${({ theme }) => theme["color-border-accent"]};
  border-radius: 0.8rem;
  box-shadow: 0.2rem 0.3rem 0.3rem
    ${({ theme }) => theme["background-accent-lighter"]};
`;

export { Section, H1, P, Div, Question, Response };
