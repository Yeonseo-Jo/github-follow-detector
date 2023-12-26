import { putFollower } from "@/api/putFollower";
import { FollowerTypes } from "@/types/Follower";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

const usePutFollower = () => {
  const mutation = useMutation({
    mutationFn: ({ login, token }: FollowerTypes) => {
      return putFollower(login, token);
    },
    onSuccess: () => {
      location.reload();
    },
    onError: (err: AxiosError) => console.log(err),
  });
  return mutation;
};

export default usePutFollower;
