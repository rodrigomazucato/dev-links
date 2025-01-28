import { SocialIcon } from "../SocialIcon";
import { SocialMediaContainer } from "./style";
import {
  LogoGithub,
  LogoInstagram,
  LogoLinkedin,
  LogoYoutube,
} from "react-ionicons";

const listIcons = [LogoGithub, LogoInstagram, LogoLinkedin, LogoYoutube];

export function SocialMedia() {
  return (
    <SocialMediaContainer>
      {listIcons.map((Item, index) => (
        <SocialIcon Platform={Item} key={index} />
      ))}
    </SocialMediaContainer>
  );
}
