import { useMutation } from "react-query";
import { UserCredential } from "@/components/Login/Login";
import api from "./api";

export const useLogin = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (userCredential: UserCredential) =>
      api.post(`auth/login`, userCredential).then((res) => res.data),
  });
};
