import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import deleteFollower from "@/api/deleteFollower";
import { FollowerTypes } from "@/types/Follower";

const useDeleteFollower = () => {
  const mutation = useMutation({
    mutationFn: ({ login, token }: FollowerTypes) => {
      return deleteFollower(login, token);
    },
    onSuccess: () => {
      location.reload();
    },
    onError: (err: AxiosError) => console.log(err),
  });
  return mutation;
};

export default useDeleteFollower;
