import styled from "styled-components";
import { Clickable } from "../Clickable";

export const Container = styled(Clickable)<{ type: "filled" | "not-filled" }>`
  background-color: ${(props) => {
    if (props.type === "filled") {
      return "#1484d6";
    } else if (props.type === "not-filled") {
      return "white";
    }
  }};
  color: ${(props) => {
    if (props.type === "filled") {
      return "white";
    } else if (props.type === "not-filled") {
      return "#1484d6";
    }
  }};
  border: 1px solid #1484d6;
  padding: 4px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 999px;
`;
