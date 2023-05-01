import styled from "styled-components";
import { Clickable } from "../../../../Clickable";

export const Container = styled(Clickable)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 31px;
  padding: 8px 24px;
  :hover {
    background-color: #f6f7f8;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const Text = styled.p`
  font-size: 0.875rem;
  color: #1c1c1c;
`;

export const StarContainer = styled.div`
  width: 20px;
`;
