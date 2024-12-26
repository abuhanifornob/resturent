/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import useAxiiousSecret from "./useAxiiousSecret";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useCart = () => {
  const axiosSecure = useAxiiousSecret();
  const { user } = useContext(AuthContext);
  const { refetch, data: orderCart = [] } = useQuery({
    queryKey: ["orderCart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/cart?email=${user.email}`);
      return res.data;
    },
  });
  return [orderCart, refetch];
};

export default useCart;
