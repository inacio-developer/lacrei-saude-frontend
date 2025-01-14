"use client";
import * as S from "./styles";
import IconArrow from "../../../public/image/help_arrow";
import { useState } from "react";

type FaqType = {
  id: number;
  question: string;
  ariaExpanded: boolean;
  response: string;
};

const initialState: FaqType[] = [
  {
    id: 1,
    question: "O evento é gratuito?",
    ariaExpanded: false,
    response:
      "Sim! O evento é completamente gratuito e aberto para todas as pessoas interessadas.",
  },
  {
    id: 2,
    question: "Quem pode participar do evento?",
    ariaExpanded: false,
    response:
      "Profissionais de saúde, estudantes, membros da comunidade LGBTQIAPN+ e qualquer pessoa interessada em promover a inclusão.",
  },
  {
    id: 3,
    question: "O que diferencia este evento de outros?",
    ariaExpanded: false,
    response:
      "Nosso foco está na educação prática e na conscientização coletiva, abordando problemas reais enfrentados pela comunidade LGBTQIAPN+.",
  },
  {
    id: 4,
    question: "O que diferencia este evento de outros?",
    ariaExpanded: false,
    response:
      "Nosso foco está na educação prática e na conscientização coletiva, abordando problemas reais enfrentados pela comunidade LGBTQIAPN+.",
  },
];

export default function Ajuda() {
  const [state, setState] = useState(initialState);

  const toogleQuote = (i: number) => {
    setState((prevState) =>
      prevState.map((item) =>
        item.id - 1 === i
          ? { ...item, ariaExpanded: !item.ariaExpanded }
          : { ...item, ariaExpanded: false },
      ),
    );
  };

  return (
    <>
      <S.Section className="container">
        <S.H1>Dúvidas</S.H1>
        <S.P>
          Caso não encontre a resposta para sua dúvida, não hesite em nos
          procurar por meio de nossos canais de comunicação tradicionais.
        </S.P>
        <div>
          {state.map((q, i) => (
            <S.Div
              key={i}
              aria-expanded={q.ariaExpanded}
              onClick={() => toogleQuote(i)}
            >
              <S.Question>
                <p>{q.question}</p>
                <IconArrow />
              </S.Question>
              {q.ariaExpanded && (
                <S.Response>
                  <p>{q.response}</p>
                </S.Response>
              )}
            </S.Div>
          ))}
        </div>
      </S.Section>
    </>
  );
}
