"use client";

import { useGetUserProfile } from "@/hooks/user/useGetUserProfile";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const searchParams = useSearchParams();
  const userToken = searchParams.get("token");

  if (!userToken) return;
  const { isLoading, error, data } = useGetUserProfile(userToken);

  console.log(isLoading, error, data);

  if (!data) return;
  const { login, avatar_url, bio, followers, following } = data;

  return (
    <div>
      팔로우 리스트 페이지
      {/* 유저 정보 부분! */}
      <article>
        {login}
        <Image
          src={avatar_url}
          width={100}
          height={100}
          alt="유저-프로필-이미지"
        />
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
    </div>
  );
};

export default page;
