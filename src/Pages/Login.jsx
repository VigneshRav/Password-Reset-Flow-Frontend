import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

const Login = ({ setToken }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { email, password };
    await axios
      .post(
        "https://password-reset-flow-backend-uj3q.onrender.com/api/user/login",
        payload
      )
      //to handle response and errors
      .then((res) => {
        toast.success(res.data.message);
        // navigate("/Welcome")
        setToken(res.data.token);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
    //clear previous value
    setEmail("");
    setPassword("");
  };
  return (
    <div className="container vh-100 mw-100 d-flex justify-content-center align-content-center border bg-primary-subtle">
      <div className=" d-flex  h-75 w-75   flex-column  justify-content-center my-auto py-2 border rounded-3 bg-danger">
        <span className=" display-6 ">Don't Have an account ?</span>
        <button className=" container justify-content-center border-0 px-2 bg-transparent ">
          <Link to={"/"} className="text-muted text-decoration-none">
            <p>
              click here
              <span className=" text-white text-decoration-underline">
                Register
              </span>
            </p>
          </Link>
        </button>
      </div>
      <div className=" d-flex h-75 w-75 flex-column  justify-content-center shadow-sm  my-auto border rounded-3 bg-white">
        <form
          onSubmit={handleSubmit}
          className="container d-grid justify-content-center"
        >
          <p className="d-flex flex-column text-danger">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email Id"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>
          <br />
          <p className="d-flex flex-column text-danger">
            <label htmlFor="password">Password</label>
            <span className="d-flex justify-content-between">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="border-0 bg-white  "
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-eye-slash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                    <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                  </svg>
                )}
                {/* {showPassword ? "Hide" : "Show"}Password */}
              </button>
            </span>
          </p>
          <button className="border-0 bg-white ">
            <Link
              to={"/forgot-password"}
              className="d-flex rounded-2 text-decoration-none  text-primary "
            >
              Forgot Password ?
            </Link>
          </button>
          <br />
          <button
            type="submit"
            className="d-flex m-2 p-2 w-50  rounded-2  border shadow-sm bg-danger text-white justify-content-center"
          >
            Login
          </button>

          <br />
        </form>

        <br />
      </div>
    </div>
  );
};

export default Login;