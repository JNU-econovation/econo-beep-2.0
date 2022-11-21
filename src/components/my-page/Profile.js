import styled from "styled-components";
import noProfile from '../../images/no-profile.png'
import {useNavigate} from "react-router-dom";

function Profile({profile}){
  const localStorage = window.localStorage;
  const navigate = useNavigate();

  const onLogOutClick = () => {
    // localStorage.removeItem('accessToken');
    // localStorage.removeItem('refreshToken');
    navigate('/');
}

  return (
    <ProfileSection>
      <img
        className="profile-img"
        src={profile.profileImageUrl ? process.env.REACT_APP_BEEP_API + profile.profileImageUrl : noProfile }
        alt="profile"
      />
      <div className="user-name">{profile.year}기 {profile.username}</div>
      <div className="user-email">{profile.userEmail}</div>
      <div className="logout-button" onClick={onLogOutClick}>로그아웃</div>
    </ProfileSection>
  )
}

const ProfileSection = styled.div`
  width: 100%;
  padding: 20px 0 30px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.myPageBgColor};

  .profile-img {
    width: 90px;
    height: 90px;
    object-fit: cover;
    border-radius: 1000%;
  }

  .user-name {
    margin: 15px 0 0px 0;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: ${(props) => props.theme.black};
  }

  .user-email {
    margin-bottom: 30px;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
  }

  .logout-button {
    padding: 7px 10px;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: ${(props) => props.theme.rentPink};
    border: 1.5px solid ${(props) => props.theme.rentPink};
    border-radius: 5px;
  }
`;

export default Profile;
