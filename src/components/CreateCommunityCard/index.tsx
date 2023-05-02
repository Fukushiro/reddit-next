import { Button } from "../Button";
import { Container, Content, Division } from "./styles";

export function CreateCommunityCard() {
  return (
    <Container>
      <Content>
        <h1>Home</h1>
        <p>
          Your personal Reddit frontpage. Come here to check in with your
          favorite communities.
        </p>
        <Division />
        <Button type="filled" onClick={() => {}}>
          Create Post
        </Button>

        <Button type="not-filled" onClick={() => {}}>
          Create Community
        </Button>
      </Content>
    </Container>
  );
}
