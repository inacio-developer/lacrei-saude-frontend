"use client";

import * as S from "./styles";
import background_image from "../../../public/image/home_layer.jpg";

const Hero = () => (
  <S.Section backgroundurl={background_image.src}>
    <S.Overlayer />
    <S.Div className="container">
      <div>
        <S.Span>10 de Junho de 2025, Webconferência, Google Meet</S.Span>
        <S.H1>Saúde com Inclusão</S.H1>
      </div>
      <S.P>
        A Lacrei Saúde apresenta o &quot;Saúde com Inclusão&quot;, um evento
        para conscientizar sobre a importância de um atendimento inclusivo,
        seguro e ético à comunidade LGBTQIAPN+.
      </S.P>
    </S.Div>
  </S.Section>
);

export default Hero;
