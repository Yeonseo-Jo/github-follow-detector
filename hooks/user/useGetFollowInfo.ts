import { Axios, AxiosError } from "axios";
import { UserTypes, followInfoDataTypes } from "@/types/User";
import { useQuery } from "@tanstack/react-query";
import { getFollowInfo } from "@/api/getFollowInfo";

export const useGetFollowInfo = (token: string) => {
  const { isLoading, error, data } = useQuery<followInfoDataTypes, AxiosError>({
    queryKey: ["get-follow"],
    queryFn: () => getFollowInfo(token),
  });

  return { isLoading, error, data };
};
