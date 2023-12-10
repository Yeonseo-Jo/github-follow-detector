import React from "react";
import Image from "next/image";
import { UserProfileInfoTypes } from "@/types/User";

const UserProfile = ({
  userProfile,
}: {
  userProfile: UserProfileInfoTypes;
}) => {
  const { login, avatar_url, bio, followers, following } = userProfile;

  return (
    <article>
      {login}
      {avatar_url && (
        <Image
          src={avatar_url}
          width={100}
          height={100}
          alt="유저-프로필-이미지"
          priority
        />
      )}

      {bio}
      <div>
        <p>
          <span>팔로워 : </span>
          <span>{followers}</span>
        </p>
        <p>
          <span>팔로잉 : </span>
          <span>{following}</span>
        </p>
      </div>
    </article>
  );
};

export default UserProfile;
