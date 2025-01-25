import { LinkContainer } from "./styles";

interface linkProps {
  titulo: string;
}

export function Link({ titulo }: linkProps) {
  return <LinkContainer>{titulo}</LinkContainer>;
}
