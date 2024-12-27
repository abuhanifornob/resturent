import { useContext } from "react";
import loginImg from "../../assets/others/authentication.png";
import autImgPng from "../../assets/others/authentication2.png";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const SignUp = () => {
  const { signUp, userProfileUpdate } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleSignUp = (data) => {
    signUp(data.email, data.password)
      .then((result) => {
        userProfileUpdate(data.name, data.photo)
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email,
            };
            axiosPublic
              .post("/user", userInfo)
              .then((res) => {
                console.log(res.data);
                if (res.data?.insertedId) {
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Create Successfully !!!",
                    showConfirmButton: false,
                    timer: 3000,
                  });
                  reset();
                  navigate("/");
                }
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => console.log(error));
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
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
        className="hero-content flex-col lg:flex-row-reverse shadow-2xl p-10 m-16"
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
          <h3 className="text-3xl text-center font-bold -mb-4">Sign Up</h3>
          <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="Type Hear"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phot URL</span>
              </label>
              <input
                {...register("photo")}
                type="text"
                placeholder="Type Hear"
                name="name"
                className="input input-bordered"
              />
              {errors.photo && (
                <span className="text-red-600">Photo is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: true,
                  pattern:
                    /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?=.{8,})/,
                })}
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {errors.password?.type == "required" && (
                <span className="text-red-600">Email is required</span>
              )}
              {errors.password?.type == "pattern" && (
                <span className="text-red-600">
                  Password Must be One Uppercase, One Lower case ,One Letter , ,
                  One Special character , Minumum 8 characters{" "}
                </span>
              )}
            </div>

            <div className="form-control mt-4">
              <input className="btn btn-primary" type="submit" value="SignUp" />
            </div>
          </form>
          <p className="text-center -mt-4">
            <small className="text-orange-400">Already Registered? </small>
            <Link to={"/login"}>
              {" "}
              <span className="text-orange-400 font-bold">Got to Login</span>
              <br />
              <span className="font-bold">Or Sign In With</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
