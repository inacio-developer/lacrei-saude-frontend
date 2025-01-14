import styled from "styled-components";
import Link from "next/link";

const PrimaryButton = styled.button`
  background-color: ${({ theme }) => theme["background-accent"]};
  width: 24.8rem;
  min-height: min-content;
  height: 4.8rem;
  padding: 1rem 3.2rem;
  font-family: ${({ theme }) => theme["family-primary"]};
  font-size: ${({ theme }) => theme.text["xl-highlight"].size};
  font-weight: ${({ theme }) => theme.text["xl-highlight"].weight};
  border: 1px solid transparent;
  border-radius: 0.8rem;
  color: ${({ theme }) => theme["color-text-accent"]};
  box-shadow: rgba(0, 0, 0, 0.2) 4px 4px 4px;
  cursor: pointer;
  color: ${({ theme }) => theme["color-text-default"]};
  transition: 0.2s;

  &:hover {
    background-color: #007756;
  }

  @media only screen and (max-width: 350px) {
    width: 100%;
  }
`;

const ButtonLink = styled(Link)`
  display: block;
  background-color: transparent;
  border-radius: 0.8rem;
  letter-spacing: 0.02rem;
  padding: 1rem 3.2rem;
  border: 1px solid transparent;
  font-family: ${({ theme }) => theme["family-primary"]};
  font-size: ${({ theme }) => theme.text["xl-highlight"].size};
  font-weight: ${({ theme }) => theme.text["xl-highlight"].weight};
  color: ${({ theme }) => theme["color-text-accent"]};
  height: 4.8rem;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme["background-accent-lighter"]};
  }

  @media only screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.2rem 1.2rem;
  }

  @media only screen and (max-width: 350px) {
    padding: 0.8rem 0.8rem;
  }
`;

export { PrimaryButton, ButtonLink };
