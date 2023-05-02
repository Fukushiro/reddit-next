import styled from "styled-components";
import { mdMediaMax, mdMediaMin, smMediaMin } from "../../utils/responsive";

export const Container = styled.div`
  background-color: #f6f7f8;
  border-radius: 20px;
  display: flex;
  height: 35px;
  padding: 0 9px 0 15px;
  align-items: center;
  gap: 4px;

  input {
    all: unset;
    background-color: red;
    min-width: 0;
    ::placeholder {
      color: #86759b;
    }
    flex: 1;
  }
  @media (${mdMediaMin}) {
    width: 355px;
  }
`;
