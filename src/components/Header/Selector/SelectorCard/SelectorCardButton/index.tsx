import Image from "next/image";
import { Clickable } from "../../../../Clickable";
import { Container, ImageContainer, StarContainer, Text } from "./styles";

export function SelectorCardButton() {
  return (
    <Container
      onClick={() => {
        console.log("AQUI");
      }}
    >
      <ImageContainer>
        <Image
          src={
            "https://b.thumbs.redditmedia.com/MznXcd9OZ7uaX-LsQUuo1xYFFnSnbvDR6E9i4JkNeHE.png"
          }
          width={20}
          height={20}
          alt={"Sion image"}
          style={{
            borderRadius: 99,
          }}
        />

        <Text>r/DirtySionMains</Text>
      </ImageContainer>
      <StarContainer></StarContainer>
    </Container>
  );
}
