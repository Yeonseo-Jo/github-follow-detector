import { putFollower } from "@/api/putFollower";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

interface UsePutFollowerProps {
  login: string;
  token: string;
}

const usePutFollower = () => {
  const mutation = useMutation({
    mutationFn: ({ login, token }: UsePutFollowerProps) => {
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
