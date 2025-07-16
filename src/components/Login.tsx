import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("aditya1@gmail.com");
  const [password, setPassword] = useState("Aditya@2005");
  const [name, setName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/api/auth/login",
        { emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.user));
      navigate("/workspace");
      console.log(res);
    } catch (error) {
      console.log("cannot login: ", error);
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/auth/signup",
        { name, emailId, password },
        { withCredentials: true }
      );
      console.log(res);

      // dispatch(addUser(res.data.savedUser));
      console.log(res.data.savedUser);

      // navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center py-6">
      <div className="card card-border bg-base-300 w-96">
        <div className="card-body">
          <h2 className="card-title">{isLoginForm ? "Login" : "Sign Up"}</h2>
          {!isLoginForm && (
            <>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Full Name</span>
                </div>
                <input
                  value={name}
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </>
          )}
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email ID</span>
            </div>
            <input
              value={emailId}
              type="text"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setEmailId(e.target.value)}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              value={password}
              type="password"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <div className="card-actions justify-center">
            <button
              className="btn btn-primary"
              onClick={isLoginForm ? handleLogin : handleSignUp}
            >
              {isLoginForm ? "Login" : "SignUp"}
            </button>
          </div>
          <p
            className="mx-auto px-2 cursor-pointer"
            onClick={() => setIsLoginForm(!isLoginForm)}
          >
            {isLoginForm
              ? "New User? Sign Up here"
              : "Existing User? Login here"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
