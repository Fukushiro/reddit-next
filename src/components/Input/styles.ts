import styled from "styled-components";
import { smMediaMin } from "../../utils/responsive";

export const Container = styled.div`
  background-color: #f6f7f8;
  border-radius: 20px;
  width: 300px;
  display: none;
  height: 35px;
  padding: 0 9px 0 15px;
  align-items: center;
  gap: 4px;

  input {
    all: unset;
    ::placeholder {
      color: #86759b;
    }
    flex: 1;
  }
  @media (${smMediaMin}) {
    display: flex;
    width: 355px;
  }
`;
