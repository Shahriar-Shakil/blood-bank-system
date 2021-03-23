import React from "react";
import Card from "../ui/card";
import { Form, Input, Button, Checkbox, Row, Col, Select } from "antd";

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 24 },
};
const { Option } = Select;

export default function RequestPublishForm() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card className="rounded-2xl p-16">
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
        <Form.Item label="Area or City" name="username">
          <Input
            placeholder="New York"
            className="bg-light border-none shadow-lg  rounded-2xl h-12"
          />
        </Form.Item>

        <Row gutter={[24, 24]}>
          <Col span="12">
            <Form.Item label="Blood Group" name="text">
              <select
                placeholder="O+"
                className="bg-light border-none shadow-lg  rounded-2xl w-full h-12 px-3 focus:outline-none"
              >
                <option value="">A+</option>
                {/* <Option value="">B+</Option>
                <Option value="">AB</Option> */}
              </select>
            </Form.Item>
          </Col>
          <Col span="12">
            <Form.Item label="I am his/her" name="text">
              <select
                placeholder="Brother"
                className="bg-light border-none shadow-lg  rounded-2xl w-full h-12 px-3 focus:outline-none"
              >
                <option value="">Brother</option>
                {/* <Option value="">B+</Option>
                <Option value="">AB</Option> */}
              </select>
            </Form.Item>
          </Col>
        </Row>

        <div className="flex justify-between">
          <Checkbox className="">Urgent</Checkbox>

          <a href="" className="text-primary">
            Schedule
          </a>
        </div>
        <div className="flex justify-center">
          <Button
            className="rounded-2xl w-40 h-12 bg-primary "
            type="primary"
            htmlType="submit"
            danger
          >
            Publish
          </Button>
        </div>
      </Form>
    </Card>
  );
}
