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
import { useQuery } from "react-query";

export default function Home() {
  //useState
  // useEffect(() => {
  //   async function start() {
  //     const { data } = await getPosts();
  //     console.log(data);
  //   }
  //   start();
  // }, []);

  const { data, isLoading } = useQuery("posts", getPosts);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <Header />
      <Container>
        <Content>
          <LeftContent>
            {data?.data?.map((post) => {
              return <HomeCard key={post.id} text={post.text} />;
            })}
          </LeftContent>
          <RightContent>
            <CreateCommunityCard />
          </RightContent>
        </Content>
      </Container>
    </div>
  );
}
