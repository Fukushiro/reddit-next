import styled from "styled-components";
import { mdMediaMax, mdMediaMin } from "../../../../utils/responsive";

export const ButtonContainer = styled.div<{ isActive: boolean }>`
  button {
    border: 1px solid
      ${(props) => {
        if (props.isActive) {
          return "#edeff1";
        }
        return "white";
      }};
    border-radius: 3px;
    :hover {
      border: 1px solid #edeff1;
    }
  }
`;
export const Button = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2px 5px;
  height: 30px;
  align-items: center;
  @media (${mdMediaMin}) {
    width: 268px;
  }
`;

export const ButtonLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 70px;
`;

export const ButtonRight = styled.div``;
