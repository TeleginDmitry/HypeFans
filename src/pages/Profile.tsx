import React from "react";
import ProfileComponent from "@components/screens/profile/Profile";
import useChangingTitlePage from "hooks/useChangingTitlePage";

const Profile = () => {

  useChangingTitlePage('Профиль')

  return <ProfileComponent></ProfileComponent>;
};

export default Profile;
