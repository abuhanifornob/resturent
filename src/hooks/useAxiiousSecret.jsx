import axios from "axios";
const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiiousSecret = () => {
  return axiosSecure;
};

export default useAxiiousSecret;
