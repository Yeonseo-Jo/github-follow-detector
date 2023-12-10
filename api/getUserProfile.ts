import { UserProfileInfoTypes } from "@/types/User";
import { client } from ".";

export const getProfile = async (token: string) => {
  const { data } = await client(token).get<UserProfileInfoTypes>("/user");
  return data;
};
