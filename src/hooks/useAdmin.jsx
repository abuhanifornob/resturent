import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiiousSecret from "./useAxiiousSecret";

const useAdmin = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosSecure = useAxiiousSecret();
  // Debugging logs for verification
  console.log("Inside Use Admin Hook, User:", user);

  const { data: isadmin, isLoading: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !!user?.email && !loading,
    queryFn: async () => {
      try {
        if (user?.email) {
          const res = await axiosSecure.get(`/user/admin/${user.email}`);
          console.log("Inside use Admin Response Data", res);
          return res.data;
        }
      } catch (error) {
        console.error("Error fetching admin status:", error);
        throw new Error("Failed to fetch admin status");
      }
    },
  });
  return [isadmin, isAdminLoading];
};

export default useAdmin;
