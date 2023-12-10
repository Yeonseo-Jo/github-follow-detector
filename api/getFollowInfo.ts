import { client } from ".";

const PER_PAGE = 100;

export const getFollowInfo = async (token: string) => {
  const { data: followingData } = await client(token).get(
    `/user/following?per_page=${PER_PAGE}`
  );

  const { data: followersData } = await client(token).get(
    `user/followers?per_page=${PER_PAGE}`
  );

  return { followingData, followersData };
};
