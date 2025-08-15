import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "https://password-reset-flow-backend-uj3q.onrender.com/api/auth/forgot-password",
        { email }
      )
      //to handle response and errors
      .then((res) => {
        toast.success(res.data.message);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };
  return (
    <div className="container vh-100 mw-100 d-flex justify-content-center align-content-center  border border-2 bg-warning">
      <div className=" d-flex h-75 w-75 flex-column  justify-content-center shadow-sm  my-auto border-2 border rounded-3 bg-white">
        <form
          onSubmit={handleSubmit}
          className="container d-grid justify-content-center"
        >
          <p className="d-flex flex-column text-primary">
            <label htmlFor="email">Email</label>
            <input
              className="border border-danger rounded p-2"
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
          <button
            type="submit"
            className="border bg-primary text-white rounded-5 p-2"
          >
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
