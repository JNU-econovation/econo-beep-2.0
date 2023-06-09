import styled from "styled-components";
import { useState, useEffect } from "react";
import UserAPI from "@/lib/api/UserAPI";

import Body from "@/styles/Body";
import PageTitle from "@/components/common/layout/PageTitle";
import MyPageHeader from "@/components/header/MyPageHeader";
import RenteeInfo from "@/components/common/RenteeInfo";
import Profile from "@/components/my-page/Profile";
import Button from "@/components/my-page/Button";

function MyPage() {
  const [profile, setProfile] = useState({});
  const [userId, setUserId] = useState(0);
  const [rentedRentees, setRentedRentees] = useState([]);
  const [returnedRentees, setReturnedRentees] = useState([]);
  const [bookmarkedRentees, setBookmarkedRentees] = useState([]);
  const [numRentees, setNumRentees] = useState({
    rented: 0,
    returned: 0,
    bookmarked: 0,
  });
  const [showRentees, setShowRentees] = useState([]);

  useEffect(() => {
    const loadProfile = async () => {
      const data = await UserAPI.loadProfile();
      setProfile(data);
      setUserId(data.id);
    };

    const loadRented = async () => {
      const data = await UserAPI.loadRented({ userId: userId });
      setRentedRentees([...data]);
      setNumRentees((num) => {
        return { ...num, rented: data.length };
      });
      setShowRentees([...data]);
    };

    const loadReturned = async () => {
      const data = await UserAPI.loadReturned({ userId: userId });
      setReturnedRentees([...data]);
      setNumRentees((num) => {
        return { ...num, returned: data.length };
      });
    };

    const loadBookmarked = async () => {
      const data = await UserAPI.loadBookmark({ userId: userId });
      setBookmarkedRentees([...data]);
      setNumRentees((num) => {
        return { ...num, bookmarked: data.length };
      });
    };

    if (userId === 0) {
      loadProfile();
    } else if (userId !== 0) {
      loadRented();
      loadReturned();
      loadBookmarked();
    }
  }, [userId]);

  return (
    <Body>
      <PageTitle title="마이 페이지" />
      <MyPageHeader />
      <Profile profile={profile} />
      <RentSection>
        <Button
          numRentees={numRentees}
          onRentClick={() => {
            setShowRentees(rentedRentees);
          }}
          onReturnClick={() => {
            setShowRentees(returnedRentees);
          }}
          onBookmarkClick={() => {
            setShowRentees(bookmarkedRentees);
          }}
        />
        <RenteeInfoSection>
          {showRentees.map((rentee) => (
            <RenteeInfo
              id={rentee?.id}
              thumbnailUrl={
                import.meta.env.VITE_BEEP_API + rentee?.thumbnailUrl
              }
              type={rentee?.type}
              name={rentee?.name}
              bookArea={rentee?.bookArea}
              bookAuthorName={rentee?.bookAuthorName}
              rentState={rentee?.rentState}
            />
          ))}
        </RenteeInfoSection>
      </RentSection>
    </Body>
  );
}

const RentSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
`;

const RenteeInfoSection = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 15px;
  background-color: ${(props) => props.theme.bgColor};
`;

export default MyPage;
