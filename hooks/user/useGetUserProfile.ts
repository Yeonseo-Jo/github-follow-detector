import { getProfile } from "@/api/getUserProfile";
import { UserProfileInfoTypes } from "@/types/User";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useGetUserProfile = (token: string) => {
  const { isLoading, error, data } = useQuery<UserProfileInfoTypes, AxiosError>(
    {
      queryKey: ["get-profile"],
      queryFn: () => getProfile(token),
    }
  );

  return { isLoading, error, data };
};
