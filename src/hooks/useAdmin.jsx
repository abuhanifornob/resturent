import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiiousSecret from "./useAxiiousSecret";

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiiousSecret();
  const { data: isadmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user.email, "isAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/admin/${user.email}`);
      return res.data;
    },
  });
  return [isadmin, isAdminLoading];
};

export default useAdmin;
