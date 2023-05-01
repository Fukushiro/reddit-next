import { SelectorCardButton } from "./SelectorCardButton";
import { Container, Content, Section, Title } from "./styles";
interface SelectorCardProps {
  isOpen: boolean;
}
export function SelectorCard({ isOpen }: SelectorCardProps) {
  return (
    <Container isOpen={isOpen}>
      <Content>
        <Section>
          <Title>YOUR COMMUNITIES</Title>

          <SelectorCardButton />
        </Section>
      </Content>
    </Container>
  );
}
