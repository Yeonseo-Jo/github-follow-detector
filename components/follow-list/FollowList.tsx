import { followInfoDataTypes } from "@/types/User";
import Image from "next/image";
import React from "react";

const FollowList = ({ followData }: { followData: followInfoDataTypes }) => {
  const { followingData, followersData } = followData;

  // 맞팔 중인 사람들 리스트
  const matchedList = followersData.filter((follower) => {
    return followingData.some(
      (following) => following.login === follower.login
    );
  });

  // 나를 팔로우 한 사람들 중 내가 팔로우 하지 않은 사람들 리스트
  const unfollowingList = followersData.filter((follower) => {
    return !matchedList.includes(follower);
  });

  return (
    <div>
      <article>
        <p>맞팔 아닌 사람</p>
        {unfollowingList.map(({ login, bio, avatar_url }) => {
          return (
            <div key={login}>
              {avatar_url && (
                <Image
                  src={avatar_url}
                  width={50}
                  height={50}
                  alt="유저-이미지"
                />
              )}
              <p>{login}</p>
              <p>{bio}</p>
            </div>
          );
        })}
      </article>

      {/* 알아보기 쉬우라고 일부러 띄어놨음! 추후 수정! */}
      <br />
      <br />

      <article>
        <p>맞팔 중인 사람</p>
        {matchedList.map(({ login, bio, avatar_url }) => {
          return (
            <div key={login}>
              {avatar_url && (
                <Image
                  src={avatar_url}
                  width={50}
                  height={50}
                  alt="유저-이미지"
                />
              )}
              <p>{login}</p>
              <p>{bio}</p>
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default FollowList;
