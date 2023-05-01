import { Clickable } from "../../Clickable";
import { Container } from "./styles";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { SelectorButton } from "./SelectorButton";
import { useState } from "react";
import { SelectorCard } from "./SelectorCard";

export function Selector() {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <Container>
      <SelectorButton isActive={isActive} setIsActive={setIsActive} />
      <SelectorCard isOpen={isActive} />
    </Container>
  );
}
