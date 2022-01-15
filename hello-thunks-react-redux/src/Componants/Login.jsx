import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  loginReqError,
  loginReqloading,
  loginReqSuccess,
} from "../Redux/action";
import { AuthContext } from "./AuthContext";
import "./Css.css";
function Login() {
  const [userdata, setUserdata] = useState({});
  const { token, isLoading, isError } = useSelector(
    (state) => state.loginReducer
  );
  const handleChange = (e) => {
    let { name, value } = e.target;
    setUserdata({
      ...userdata,
      [name]: value,
    });
  };
  const { handleToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginReqloading());
    fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
      method: "POST",
      body: JSON.stringify(userdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        console.log(res);
        dispatch(loginReqSuccess(res));
        handleToken(res.token);
        navigate("/");
      })
      .catch((err) => {
        dispatch(loginReqError(err));
        console.log(err);
      });
  };
  return isLoading ? (
    <h1>
      <h1>Loading....</h1>
    </h1>
  ) : isError ? (
    <h1>
      <h1>{token}</h1>
    </h1>
  ) : (
    <div className="register">
      <form method="POST" onSubmit={handleSubmit}>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="username"
          placeholder="Enter User Name"
        />
        <br />
        <input
          onChange={(e) => handleChange(e)}
          type="password"
          name="password"
          placeholder="Enter Password"
        />
        <br />
        <input className="regsubmit" type="submit" />
      </form>
      <Link to={"/register"}>
        <button>Don't have account?</button>
      </Link>
    </div>
  );
}

export default Login;
