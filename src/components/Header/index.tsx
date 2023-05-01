import Image from "next/image";
import { Button } from "../Button";
import { Selector } from "./Selector";
import {
  Container,
  Container1,
  Container2,
  Container3,
  HeaderInput,
  ImageRedditText,
  LogoContainer,
} from "./styles";

interface HeaderProps {}
export function Header({}: HeaderProps) {
  // handlers
  function handleBaixarAppClick() {}
  function handleEntrarClick() {
    console.log("Entrar");
  }
  //media query

  return (
    <Container>
      {/* logo */}
      <Container1>
        <LogoContainer>
          <Image
            src={"/reddit-logo.svg"}
            alt="Logo reddit"
            width={35}
            height={35}
          />{" "}
          <ImageRedditText
            src={"/reddit-logo-text.svg"}
            alt="Logo reddit"
            width={60}
            height={40}
          />
        </LogoContainer>
        <Selector />
      </Container1>

      {/* <Container2> */}
      <HeaderInput />
      {/* </Container2> */}

      <Container3>
        <Button type="not-filled" onClick={handleBaixarAppClick}>
          Baixar o app
        </Button>
        <Button type="filled" onClick={handleEntrarClick}>
          Entrar
        </Button>
      </Container3>
    </Container>
  );
}
