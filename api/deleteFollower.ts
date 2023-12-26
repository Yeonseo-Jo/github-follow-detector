import { client } from ".";

const deleteFollower = async (login: string, token: string) => {
  const response = await client(token).delete(`/user/following/${login}`);
  return response;
};

export default deleteFollower;
