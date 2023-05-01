import styled from "styled-components";
import { Input } from "../Input";
import {
  mdMediaMax,
  mdMediaMin,
  smMax,
  smMediaMax,
  smMediaMin,
} from "../../utils/responsive";
import { lgMediaMin } from "../../utils/responsive";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  width: 100%;
  padding: 0 20px;
`;
export const LogoContainer = styled.div``;

export const ImageRedditText = styled(Image)`
  @media (${smMediaMax}) {
    display: none;
  }
  @media (${mdMediaMax}) {
    display: none;
  }
`;

export const HeaderInput = styled(Input)`
  flex: 1;
`;

export const Container1 = styled.div`
  display: flex;
  align-items: center;
`;
export const Container2 = styled.div`
  display: flex;
  align-items: center;
`;
export const Container3 = styled.div`
  margin-left: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
`;
