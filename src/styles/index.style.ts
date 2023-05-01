import styled from "styled-components";
import { Card } from "../components/Card";
import { lgMediaMin, mdMediaMin, smMediaMin } from "../utils/responsive";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
export const Content = styled.div`
  display: flex;
  width: 100%;

  @media (${lgMediaMin}) {
    width: 2000px;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  width: 100%;
  @media (${mdMediaMin}) {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 60%;
  }
`;

export const HomeCard = styled(Card)`
  width: 100%;

  @media (${lgMediaMin}) {
    width: 600px;
  }
`;

export const RightContent = styled.div`
  display: none;
  @media (${mdMediaMin}) {
    display: block;

    width: 40%;
  }
`;
