import React from "react";
import ProfileSkeleton from "../skeleton/profile-skeleton";
import Layout from "../components/layout/layout";
import ProfileForm from "../components/user/profile-form";

const ProfilePage = () => {
  return (
    <Layout>
      <ProfileForm/>
    </Layout>
  );
};

export default ProfilePage;
