import { useContext, useEffect, useState } from "react";
import loginImg from "../../assets/others/authentication.png";
import autImgPng from "../../assets/others/authentication2.png";
import Swal from "sweetalert2";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { login } = useContext(AuthContext);

  const [isValid, setIsValid] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const validateCapthca = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };
  const HandleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login  Successfully !!!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };
  return (
    <div
      className="hero bg-base-200"
      style={{
        backgroundImage: `url(${loginImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className="hero-content flex-col lg:flex-row shadow-2xl p-10 m-16"
        style={{
          backgroundImage: `url(${loginImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="text-center w-1/2 lg:text-left">
          <img src={autImgPng} alt="" />
        </div>
        <div className="card w-full lg:w-1/2 shrink-0">
          <h3 className="text-3xl text-center font-bold -mb-4">Login</h3>
          <form onSubmit={HandleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                onBlur={validateCapthca}
                type="test"
                name="captha"
                placeholder="Type Capthca"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-4">
              <input
                disabled={isValid}
                className="btn btn-primary"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p className="text-center -mt-4">
            <small className="text-orange-400">New Hear ? </small>
            <Link to={"/signUp"}>
              {" "}
              <span className="text-orange-400 font-bold">
                Create a New Account.
              </span>
              <br />
              <span className="font-bold">Or Sign In With</span>
            </Link>
          </p>
          <div className="px-16 text-2xl mt-2">
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
