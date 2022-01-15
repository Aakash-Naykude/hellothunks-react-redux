import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userRegistrationProcess } from "../Redux/action";
import "./Css.css";
function Register() {
  const [userdata, setUserdata] = useState({});
  const { isRegisterd, isLoading, isError } = useSelector(
    (state) => state.registerReducer
  );
  const handleChange = (e) => {
    let { name, value } = e.target;
    setUserdata({
      ...userdata,
      [name]: value,
    });
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userRegistrationProcess(userdata));
    console.log(isLoading, isError);
  };
  console.log(isLoading, isError);
  return isLoading ? (
    <h1>
      <h1>Loading....</h1>
    </h1>
  ) : isError ? (
    <h1>
      <h1>Something went wrong</h1>
    </h1>
  ) : isRegisterd ? (
    <h1>
      <img
        style={{ width: "50%" }}
        src="https://codeconvey.com/wp-content/uploads/2020/06/registration-successful-message-html.png"
        alt="imag"
      />
      <div>
        <button>
          <Link to={"/login"}>Add another account </Link>
        </button>
      </div>
    </h1>
  ) : (
    <div className="register">
      <form method="POST" onSubmit={handleSubmit}>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="name"
          placeholder="Enter Name"
        />
        <br />
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="email"
          placeholder="Enter Email"
        />
        <br />
        <input
          onChange={(e) => handleChange(e)}
          type="password"
          name="password"
          placeholder="Enter Password"
        />
        <br />
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="username"
          placeholder="Enter Username"
        />
        <br />
        <input
          onChange={(e) => handleChange(e)}
          type="number"
          name="mobile"
          placeholder="Enter Mobile Number"
        />
        <br />
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="description"
          placeholder="Description"
        />
        <br />
        <input className="regsubmit" type="submit" />
      </form>
      <Link to={"/login"}>
        <button>Alredy Have account?</button>
      </Link>
    </div>
  );
}

export default Register;
