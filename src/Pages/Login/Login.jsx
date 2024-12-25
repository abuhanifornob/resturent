import { useContext, useEffect, useRef, useState } from "react";
import loginImg from "../../assets/others/authentication.png";
import autImgPng from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
const Login = () => {
  const { login, logout } = useContext(AuthContext);
  const captchaRef = useRef();
  const [isValid, setIsValid] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const validateCapthca = () => {
    const user_captcha_value = captchaRef.current.value;
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
    });
    console.log(email, password);
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
                type="test"
                name="captha"
                ref={captchaRef}
                placeholder="Type Capthca"
                className="input input-bordered"
                required
              />
              <label className="label">
                <button onClick={validateCapthca} className="btn btn-sm w-full">
                  Check Captha Validation
                </button>
              </label>
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
        </div>
      </div>
    </div>
  );
};

export default Login;
