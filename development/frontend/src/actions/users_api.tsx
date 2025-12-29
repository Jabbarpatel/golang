import { useQuery } from "react-query";
import api from "./api";

export const useGetUsers = (page: number, pageSize: number) => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () =>
      api.get(`users/get_users/${page}/${pageSize}`).then((res) => res.data),
    refetchOnWindowFocus: false,
    enabled: true,
  });
};
