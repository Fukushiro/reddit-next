import { HTMLAttributes, HTMLProps } from "react";
import { Container } from "./styles";
interface ClickableProps extends HTMLAttributes<HTMLButtonElement> {
  children: any;
}
export function Clickable({ children, ...rest }: ClickableProps) {
  return <Container {...rest}>{children}</Container>;
}
