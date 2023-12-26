"use client";

import * as styles from "../../styles/FollowListPage/FollowListPage.css";
import FollowList from "@/components/follow-list/FollowList";
import UserProfile from "@/components/follow-list/UserProfile";
import { useGetFollowInfo } from "@/hooks/user/useGetFollowInfo";
import { useGetUserProfile } from "@/hooks/user/useGetUserProfile";
import { useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const searchParams = useSearchParams();
  const userToken = searchParams.get("token");

  if (!userToken) return;
  const {
    isLoading: loadingProfile,
    error: profileError,
    data: profileData,
  } = useGetUserProfile(userToken);
  const { isLoading, error, data: followData } = useGetFollowInfo(userToken);

  return (
    <div className={styles.FollowListPageWrapper}>
      팔로우 리스트 페이지
      {/* 유저 정보 부분! */}
      {profileData && <UserProfile userProfile={profileData} />}
      {/* 팔로우 정보 보여주는 부분 */}
      {followData && <FollowList followData={followData} />}
    </div>
  );
};

export default page;
