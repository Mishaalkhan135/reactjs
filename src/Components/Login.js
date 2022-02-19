import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { LoginUser } from "../Redux/Actions/authActions";

const Login = (props) => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("values", values);
    dispatch(LoginUser(values));
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Form
          name='basic'
          // labelCol={{
          //   span: 8,
          // }}
          // wrapperCol={{
          //   span: 16,
          // }}

          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          style={{ width: "100%" }}
        >
          <h1>Login Form</h1>
          <Form.Item
            name='email'
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              { type: "email", message: "Please enter valid email" },
            ]}
          >
            <Input placeholder='Email' type='email' />
          </Form.Item>

          <Form.Item
            name='password'
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder='Password' />
          </Form.Item>

          <Button type='primary' block htmlType='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default Login;
