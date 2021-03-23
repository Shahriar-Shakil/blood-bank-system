import React from "react";
import { Form, Input, Button, Checkbox, Row, Col, Select } from "antd";
import Link from "next/link";
export default function SignUpForm() {
  return (
    <div className="px-32">
      <h1 className="text-3xl font-ex font-extrabold text-center">Sign In</h1>
      <Form name="basic" initialValues={{ remember: true }} layout="vertical">
        <Form.Item label="Email or Username" name="username">
          <Input
            placeholder="New York"
            type="email"
            className="bg-light border-none shadow-lg  rounded-2xl h-12"
            placeholder="example@domain.com"
          />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password
            type="email"
            className="bg-light border-none shadow-lg  rounded-2xl h-12"
            placeholder="*******"
          />
        </Form.Item>
        <Button
          className="bg-primary"
          block
          className="h-16"
          type="primary"
          htmlType="submit"
          shape="round"
          danger
        >
          Logiin
        </Button>
      </Form>
      <div className="opacity-60 text-center py-5">
        <Link href="">
          <a className="underline py-2">Forgot Password?</a>
        </Link>
        <p>
          Don't have an account?{" "}
          <Link href="/accounts/register">
            <a>
              <span className="text-black text-lg font-bold">Sign up</span>
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
}
