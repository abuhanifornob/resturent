import { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login  Successfully !!!",
          showConfirmButton: false,
          timer: 1500,
        });
        const userInfo = {
          name: result.user?.displayName,
          email: result.user?.email,
        };
        axiosPublic
          .post("/user", userInfo)
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => console.log(error));

        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex justify-between">
      <div>
        <button onClick={handleGoogleLogin} className="btn">
          <FaGoogle></FaGoogle>
          Google
        </button>
      </div>
      <div>
        <button className="btn">
          <FaFacebook />
          Facebook
        </button>
      </div>
      <div>
        <button className="btn">
          <FaGithub />
          GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
