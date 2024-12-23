import { useEffect } from "react";
import loginImg from "../../assets/others/authentication.png";
import autImgPng from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
const Login = () => {
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
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
          <form onSubmit={handleForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="password"
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
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
