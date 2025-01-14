"use client";
import * as S from "./styles";
import Card from "@/components/Card";
import iconGroup from "../../../public/image/about_icon_group.svg";
import iconInteractive from "../../../public/image/about_icon_interactive.svg";
import iconMind from "../../../public/image/about_icon_mind.svg";

const About = () => {
  return (
    <S.Section>
      <S.H1>Por que conscientizar sobre saúde inclusiva?</S.H1>
      <S.Line />
      <S.H3>
        Incluir é cuidar. Conscientizar é transformar. Junte-se a nós!
      </S.H3>
      <S.Div>
        <Card
          icon={iconGroup}
          title="Saúde para Todos"
          text={"A inclusão garante acesso digno e seguro à saúde para todos."}
        ></Card>
        <Card
          icon={iconInteractive}
          title="Representatividade"
          text={"Entender a comunidade é o primeiro passo para cuidar melhor."}
        ></Card>
        <Card
          icon={iconMind}
          title="Informar"
          text={"Conscientizar é essencial para superar desigualdades."}
        ></Card>
      </S.Div>
    </S.Section>
  );
};

export default About;
