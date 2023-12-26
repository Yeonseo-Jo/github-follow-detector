import { client } from ".";

export const putFollower = async (login: string, token: string) => {
  const response = await client(token).put(`/user/following/${login}`);
  return response;
};
