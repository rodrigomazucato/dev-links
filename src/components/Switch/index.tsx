import { SwitchContainer } from "./style";

type switchProps = {
  onClick: () => void;
};

export function Switch({ onClick }: switchProps) {
  return <SwitchContainer onClick={onClick} />;
}
