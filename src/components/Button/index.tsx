import React from "react";
import * as S from "./styles";

type ButtonProps = {
  type: "PrimaryButton" | "ButtonLink";
  path?: string;
  event?: React.MouseEventHandler<HTMLButtonElement>;
  content: string | React.ReactNode;
};

const Button = ({ type, path, event, content }: ButtonProps) => {
  const typeButton = (): React.ReactNode => {
    const buttons = {
      PrimaryButton: (
        <S.PrimaryButton onClick={event}>{content}</S.PrimaryButton>
      ),
      ButtonLink: <S.ButtonLink href={path as string}>{content}</S.ButtonLink>,
    };
    return buttons[type];
  };

  return typeButton();
};

export { Button };
