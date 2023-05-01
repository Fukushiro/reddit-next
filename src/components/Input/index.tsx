import { HTMLAttributes } from "react";
import { BsSearch } from "react-icons/bs";
import { Container } from "./styles";

interface InputProps extends HTMLAttributes<HTMLDivElement> {}
export function Input({ ...rest }: InputProps) {
  return (
    <Container {...rest}>
      <BsSearch size={20} />
      <input placeholder="Search Reddit" />
    </Container>
  );
}
