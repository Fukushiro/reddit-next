import Image from "next/image";
import { HTMLAttributes } from "react";
import { IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io";
import {
  Container,
  ContentHeader,
  ContentHeaderLeft,
  ContentText,
  ContentTitle,
  JoinButton,
  Left,
  Right,
} from "./styles";
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  text?: string;
}
export function Card({ text, ...rest }: CardProps) {
  return (
    <Container {...rest}>
      <Left>
        <IoMdArrowRoundUp />
        1
        <IoMdArrowRoundDown />
      </Left>
      <Right>
        <ContentHeader>
          <ContentHeaderLeft>
            <Image
              src={
                "https://b.thumbs.redditmedia.com/_xG3tObm6Qzro_SA9jMF7t7tfTYrJx7o1B2mIsurvSQ.png"
              }
              width={20}
              height={20}
              style={{ borderRadius: 999 }}
              alt={"subreddit image"}
            />{" "}
            <p>
              r/RaftTheGame <span>Enviado por u/Fantissmal há 21 horas</span>
            </p>
          </ContentHeaderLeft>

          <div>
            <JoinButton type="filled">Unir-se</JoinButton>
          </div>
        </ContentHeader>
        <ContentTitle>
          <h2>Friend and I cant join each other games</h2>
        </ContentTitle>
        <ContentText>
          <p>{text}</p>
        </ContentText>
      </Right>
    </Container>
  );
}
