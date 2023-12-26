import { putFollower } from "@/api/putFollower";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { client } from "@/api";
import deleteFollower from "@/api/deleteFollower";

interface useDeleteFollowerProps {
  login: string;
  token: string;
}

const useDeleteFollower = () => {
  const mutation = useMutation({
    mutationFn: ({ login, token }: useDeleteFollowerProps) => {
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
