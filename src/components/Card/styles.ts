import styled from "styled-components";
import { Button } from "../Button";

export const Container = styled.div`
  background-color: white;
  width: 600px;
  display: flex;
  padding: 5px;
`;
export const Left = styled.div`
  display: flex;
  align-items: center;
  width: 25px;
  flex-direction: column;
`;
export const Right = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  padding: 2px 5px;
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  div {
    display: flex;
    align-items: center;
    /* padding: 2px 5px; */
    gap: 7px;
  }
`;

export const ContentHeaderLeft = styled.div`
  color: #1c1c1c;
  font-size: 0.75rem;
  font-weight: bold;
  span {
    color: #787c7e;
    font-weight: 600;
  }
`;

export const ContentTitle = styled.div`
  h2 {
    color: #222222;
    font-size: 1.125rem;
  }
`;

export const ContentText = styled.div`
  p {
    line-height: 20px;
  }
`;

export const JoinButton = styled(Button)`
  align-self: flex-end;
`;
