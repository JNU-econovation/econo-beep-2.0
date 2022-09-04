import styled from "styled-components";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import BluePurpleGradient from "../../styles/BluePurpleGradient";
import routes from "../../routes";

function ProfileButton({ isToggled }) {
  const navigate = useNavigate();
  return (
    <Profile isToggled={isToggled}>
      {!isToggled ? (
        <Box
          onClick={() => {
            navigate(routes.profile);
          }}
        >
          <BluePurpleGradient />
          <AiOutlineUser style={{ fill: "url(#blue-purple-gradient)" }} />
        </Box>
      ) : (
        <NoLogo />
      )}
    </Profile>
  );
}

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 14px;
  border: none;
`;

const NoLogo = styled.div`
  width: ${(props) => props.theme.headerButtonSize};
  height: ${(props) => props.theme.headerButtonSize};
  display: block;
  justify-content: center;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${(props) => props.theme.headerButtonSize};
  cursor: pointer;
`;
export default ProfileButton;
