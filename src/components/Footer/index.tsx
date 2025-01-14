"use client";
import Link from "next/link";
import * as S from "./styles";
import IconFacebook from "../../../public/image/footer_logo_facebook";
import IconInstagram from "../../../public/image/footer_logo_instagram";
import IconLinkedin from "../../../public/image/footer_logo_linkedin";
import IconEmail from "../../../public/image/footer_Logo_email";

type SocialNetworkSType = {
  alt: string;
  component: React.ReactNode;
  href: string;
};

const SocialNetworks: SocialNetworkSType[] = [
  {
    alt: "Facebook",
    component: <IconFacebook />,
    href: "https://www.facebook.com/lacrei.saude/",
  },
  {
    alt: "Instagram",
    component: <IconInstagram />,
    href: "https://www.instagram.com/lacrei.saude",
  },
  {
    alt: "Linkedin",
    component: <IconLinkedin />,
    href: "https://www.linkedin.com/company/lacrei",
  },
  {
    alt: "Email",
    component: <IconEmail />,
    href: "mailto:contato@lacreisaude.com.br",
  },
];

const Footer = () => (
  <S.Section>
    <S.Footer className="container">
      <nav>
        <S.Ul>
          {SocialNetworks.map((icon, i) => (
            <li key={i}>
              <Link href={icon.href} target="_blank">
                {icon.component}
              </Link>
            </li>
          ))}
        </S.Ul>
      </nav>
      <S.Line />
      <S.Nav>
        <S.Links className="col-1">
          <li>
            <S.Topic>Lacrei Saúde</S.Topic>
          </li>
          <li>
            <S.A href="https://lacreisaude.com.br/quem-somos/">Quem Somos</S.A>
          </li>
          <li>
            <S.A href="https://lacreisaude.com.br/quem-somos/#proposito">
              Nosso Propósito
            </S.A>
          </li>
          <li>
            <S.A href="https://lacreisaude.com.br/quem-somos/#missao-visao-valores">
              Missão, Visão e Valor
            </S.A>
          </li>
          <li>
            <S.A href="https://lacreisaude.com.br/acessibilidade/">
              Acessibilidade
            </S.A>
          </li>
        </S.Links>
        <S.Links className="col-2">
          <li>
            <S.Topic>Saúde</S.Topic>
          </li>
          <li>
            <S.A href="https://paciente.lacreisaude.com.br/">
              Buscar atendimento
            </S.A>
          </li>
          <li>
            <S.A href="https://profissional.lacreisaude.com.br/">
              Oferecer atendimento
            </S.A>
          </li>
        </S.Links>
        <S.Links className="col-3">
          <li>
            <S.Topic>Segurança e Privacidade</S.Topic>
          </li>
          <li>
            <S.A href="https://paciente.lacreisaude.com.br/">
              Política de Privacidade
            </S.A>
          </li>
          <li>
            <S.A href="https://profissional.lacreisaude.com.br/">
              Termos de uso
            </S.A>
          </li>
          <li>
            <S.A href="https://profissional.lacreisaude.com.br/">
              Direitos de titular
            </S.A>
          </li>
        </S.Links>
      </S.Nav>
      <S.Line />
      <S.Div>
        <p>
          A Lacrei Saúde não oferece tratamento médico emergencial. Em caso de
          emergência procure o hospital mais próximo.
        </p>
        <p>
          Em caso de auxílio psicológico, ligue para 188 (CVV) ou acesse o site
          <Link href="www.cvv.org.br"> www.cvv.org.br</Link>
        </p>
        <p>
          Copyright © 2024 Lacrei Saúde. Todos os direitos reservados. CNPJ:
          51.265.351/0001-65
        </p>
      </S.Div>
    </S.Footer>
  </S.Section>
);

export default Footer;
