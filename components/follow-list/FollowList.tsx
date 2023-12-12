import { followInfoDataTypes } from "@/types/User";
import Image from "next/image";
import React from "react";
import * as styles from "../../styles/FollowListPage/FollowList/FollowList.css";

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
    <div className={styles.FollowListWrapper}>
      <article className={styles.ListDetailWrapper}>
        <p className={styles.ListTitle}>맞팔 아닌 사람</p>
        {unfollowingList.map(({ login, bio, avatar_url }) => {
          return (
            <div key={login}>
              {avatar_url && (
                <Image
                  src={avatar_url}
                  width={100}
                  height={100}
                  alt="유저-이미지"
                />
              )}
              <p className={styles.LoginId}>{login}</p>
              <p>{bio}</p>
            </div>
          );
        })}
      </article>

      {/* 알아보기 쉬우라고 일부러 띄어놨음! 추후 수정! */}
      <br />
      <br />

      <article className={styles.ListDetailWrapper}>
        <p className={styles.ListTitle}>맞팔 중인 사람</p>
        {matchedList.map(({ login, bio, avatar_url }) => {
          return (
            <div key={login}>
              {avatar_url && (
                <Image
                  src={avatar_url}
                  width={100}
                  height={100}
                  alt="유저-이미지"
                />
              )}
              <p className={styles.LoginId}>{login}</p>
              <p>{bio}</p>
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default FollowList;
