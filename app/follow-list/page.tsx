"use client";

import UserProfile from "@/components/follow-list/UserProfile";
import { useGetUserProfile } from "@/hooks/user/useGetUserProfile";
import { useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const searchParams = useSearchParams();
  const userToken = searchParams.get("token");

  if (!userToken) return;
  const { isLoading, error, data: profileData } = useGetUserProfile(userToken);

  return (
    <div>
      팔로우 리스트 페이지
      {/* 유저 정보 부분! */}
      {profileData && <UserProfile userProfile={profileData} />}
    </div>
  );
};

export default page;
