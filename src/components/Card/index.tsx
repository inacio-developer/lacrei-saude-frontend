import * as S from "./styles";
import Image from "next/image";

type CardProps = {
  icon: string;
  title: string;
  text: string;
};

const Card = ({ icon, title, text }: CardProps) => (
  <S.Div>
    <Image src={icon} alt={`icon ${title}`} height={70} width={70} />
    <S.Text>
      <S.H4>{title}</S.H4>
      <S.P>{text}</S.P>
    </S.Text>
  </S.Div>
);

export default Card;
