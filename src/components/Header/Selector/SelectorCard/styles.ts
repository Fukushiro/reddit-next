import styled from "styled-components";

export const Container = styled.div<{ isOpen: boolean }>`
  position: absolute;
  left: 0;
  right: 0;
  height: 482px;
  background-color: white;
  display: ${(props) => {
    if (props.isOpen) {
      return "block";
    }
    return "none";
  }};
`;

export const Content = styled.div`
  overflow-y: scroll;
  height: 100%;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  padding: 16px 24px 8px;
  font-size: 10px;
  color: #878a8c;
`;
