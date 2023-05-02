import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  width: 312px;
`;

export const Content = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 8px;
  h1 {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    display: inline-block;
    font-family: Arial;
  }
  p {
    font-family: "Noto Sans", Arial, sans-serif;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    word-wrap: break-word;
  }
  button {
    width: 80%;
    align-self: center;
  }
`;

export const Division = styled.div`
  border-bottom: 1px solid gray;
  margin-top: 10px;
`;
