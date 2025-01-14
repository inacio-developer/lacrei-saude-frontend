"use client";
import * as S from "./styles";
import Image from "next/image";
import logo from "../../../public/image/header_logo_lacrei.svg";
import { Button } from "../Button";
import IconHome from "../../../public/image/header_menu_home";
import IconHelp from "../../../public/image/header_menu_help";
import { useEffect, useState } from "react";

const Header = () => {
  const [resize, setResize] = useState(0);

  useEffect(() => {
    setResize(window.innerWidth);
    const handleResize = () => {
      setResize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const initMenu = resize <= 500 ? <IconHome /> : "Inicio";
  const helpMenu = resize <= 500 ? <IconHelp /> : "Ajuda";

  return (
    <S.Section>
      <S.Header className="container">
        <Image src={logo} width={187} alt="logo Lacrei Saúde" />
        <S.Ul>
          <li>
            <Button type="ButtonLink" path="/" content={initMenu} />
          </li>
          <li>
            <Button type="ButtonLink" path="/ajuda" content={helpMenu} />
          </li>
        </S.Ul>
      </S.Header>
    </S.Section>
  );
};
export default Header;
