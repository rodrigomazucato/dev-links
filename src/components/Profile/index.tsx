import { ProfileContainer } from "./style";

const url = "https://github.com/rodrigomazucato.png";
const username = url.split("/")[3].replace(".png", "");

export function Profile() {
  return (
    <ProfileContainer>
      <img src={url} alt="Foto de perfil" />
      <span>@{username}</span>
    </ProfileContainer>
  );
}
