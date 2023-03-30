import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, message } from "antd";
import axios from "axios";
import Spinner from "../components/Spinner";

const Login = () => {
  //loading state
  const [loading, setLoading] = useState(false);
  //useNavigate function
  const navigate = useNavigate();
  //form submit handler
  const submitHandler = async (values) => {
    // console.log(values);
    try {
      setLoading(true);
      const { data } = await axios.post("/users/login", values);
      setLoading(false);
      message.success("Login Successfull!");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, password: "" })
      );
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("Oops, Something went wrong!");
    }
  };

  //prevent from user already login
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <div className="register-page">
        {loading && <Spinner />}
        <Form layout="vertical" onFinish={submitHandler}>
          <h1>Login Form</h1>
          <Form.Item label="Email" name="email">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" />
          </Form.Item>
          <div className="d-flex align-items-center justify-content-center">
            <button className="btn btn-primary">Login</button>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-2">
            <Link to="/register">Not a User ? Click here to Register</Link>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
