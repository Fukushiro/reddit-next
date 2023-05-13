import Head from "next/head";
import Image from "next/image";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import {
  Container,
  Content,
  HomeCard,
  LeftContent,
  RightContent,
} from "../styles/index.style";
import { CreateCommunityCard } from "../components/CreateCommunityCard";
import { useEffect } from "react";
import { getPosts } from "../services/api/post.api";

export default function Home() {
  //useState
  useEffect(() => {
    async function start() {
      const { data } = await getPosts();
      console.log(data);
    }
    start();
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <Content>
          <LeftContent>
            <HomeCard
              text={` My friend and I have been unable to join each other's survival
            games. The first time we try, we load almost all the way to the end
            and eventually get a "trying to connect to host... having issues
            connecting." During this time, the host player can see the joining
            player frozen on their raft and can't sleep. If we exit to the main
            menu and attempt to try again, we just get a 30 second countdown and
            then a connection timed out. Joining player spawns where the raft
            was when they first started trying to join, which is usually far
            away in the ocean. If we restart the game, we get the loading screen
            and eventual trying to connect error. Neither of us have that
            GameFirst thing. We both lowered our graphics settings as much as
            possible and neither of us have a problem running Raft single
            player. When they do a creative mode world, I can join no problem,
            but we want to survive together, not just sit stationary. How can we
            fix this?`}
            />

            <HomeCard
              text={` My friend and I have been unable to join each other's survival
            games. The first time we try, we load almost all the way to the end
            and eventually get a "trying to connect to host... having issues
            connecting." During this time, the host player can see the joining
            player frozen on their raft and can't sleep. If we exit to the main
            menu and attempt to try again, we just get a 30 second countdown and
            then a connection timed out. Joining player spawns where the raft
            was when they first started trying to join, which is usually far
            away in the ocean. If we restart the game, we get the loading screen
            and eventual trying to connect error. Neither of us have that
            GameFirst thing. We both lowered our graphics settings as much as
            possible and neither of us have a problem running Raft single
            player. When they do a creative mode world, I can join no problem,
            but we want to survive together, not just sit stationary. How can we
            fix this?`}
            />

            <HomeCard
              text={` My friend and I have been unable to join each other's survival
            games. The first time we try, we load almost all the way to the end
            and eventually get a "trying to connect to host... having issues
            connecting." During this time, the host player can see the joining
            player frozen on their raft and can't sleep. If we exit to the main
            menu and attempt to try again, we just get a 30 second countdown and
            then a connection timed out. Joining player spawns where the raft
            was when they first started trying to join, which is usually far
            away in the ocean. If we restart the game, we get the loading screen
            and eventual trying to connect error. Neither of us have that
            GameFirst thing. We both lowered our graphics settings as much as
            possible and neither of us have a problem running Raft single
            player. When they do a creative mode world, I can join no problem,
            but we want to survive together, not just sit stationary. How can we
            fix this?`}
            />

            <HomeCard
              text={` My friend and I have been unable to join each other's survival
            games. The first time we try, we load almost all the way to the end
            and eventually get a "trying to connect to host... having issues
            connecting." During this time, the host player can see the joining
            player frozen on their raft and can't sleep. If we exit to the main
            menu and attempt to try again, we just get a 30 second countdown and
            then a connection timed out. Joining player spawns where the raft
            was when they first started trying to join, which is usually far
            away in the ocean. If we restart the game, we get the loading screen
            and eventual trying to connect error. Neither of us have that
            GameFirst thing. We both lowered our graphics settings as much as
            possible and neither of us have a problem running Raft single
            player. When they do a creative mode world, I can join no problem,
            but we want to survive together, not just sit stationary. How can we
            fix this?`}
            />
          </LeftContent>
          <RightContent>
            <CreateCommunityCard />
          </RightContent>
        </Content>
      </Container>
    </div>
  );
}
