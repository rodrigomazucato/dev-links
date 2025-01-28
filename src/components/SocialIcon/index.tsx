import { SocialIconWrapper } from "./styles";

type IconProps = {
  Platform: React.ElementType;
};

export function SocialIcon({ Platform }: IconProps) {
  return (
    <SocialIconWrapper>
      <Platform />
    </SocialIconWrapper>
  );
}
