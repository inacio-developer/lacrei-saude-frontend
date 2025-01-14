import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 38rem;
  height: 16.4rem;
  border: 0.1rem solid ${({ theme }) => theme["color-border-institucional"]};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme["background-default"]};
  padding: 2.4rem;
  gap: 2.4rem;

  @media only screen and (max-width: 500px) {
    width: 100%;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;

    img {
      width: 3.2rem;
    }
  }
`;

const Text = styled.div`
  height: 100%;
`;

const H4 = styled.h4`
  font-size: ${({ theme }) => theme.headline["sm-highlight"].size};
  font-size: ${({ theme }) => theme.headline["sm-highlight"].weight};
  color: ${({ theme }) => theme["color-text-accent"]};
`;

const P = styled.p`
  font-size: ${({ theme }) => theme.text.base.size};
  font-weight: ${({ theme }) => theme.text.base.weight};
  color: ${({ theme }) => theme["color-text-body"]};
  width: 90%;
`;

export { Div, Text, H4, P };
