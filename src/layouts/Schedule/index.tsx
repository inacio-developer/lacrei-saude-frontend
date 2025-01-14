"use client";
import * as S from "./style";
import FringeUrl from "../../../public/image/fringe-white.svg";
import { Button } from "@/components/Button";

const clickEvent = () => {
  alert("Esse evento é fictício.");
};

const Schedule = () => (
  <S.Section>
    <div className="container">
      <S.Div>
        <S.H4> Junte-se a nós! </S.H4>
        <S.P>
          <span>📅 Data: 10 de Junho de 2025</span>
          <span>📍 Local: Online (Google Meet)</span>
        </S.P>
        <Button
          type="PrimaryButton"
          content="Quero participar!"
          event={clickEvent}
        />
      </S.Div>
    </div>
    <S.Fringe backgroundurl={FringeUrl.src} />
  </S.Section>
);

export default Schedule;
