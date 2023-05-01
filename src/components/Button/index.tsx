import React, { HTMLAttributes } from "react";
import { Container } from "./styles";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: any;
  type: "filled" | "not-filled";
}
export function Button({ children, type, ...rest }: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      {children}
    </Container>
  );
}
