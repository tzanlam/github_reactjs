import { Form, Input, Select } from "antd";
import React from "react";
import { DEPARTMENT_OPTIONS, ROLE_OPTIONS } from "../../utils/constants";

function SignUp(props) {
  return (
    <Form layout="vertical">
      <Form.Item label="UserName" name="username">
        <Input allowClear />
      </Form.Item>

      <Form.Item label="Email" name="email">
        <Input allowClear />
      </Form.Item>

      <Form.Item label="FullName" name="fullName">
        <Input allowClear />
      </Form.Item>

      <Form.Item label="Role" name="role">
        <Select
          placeholder="Select a option and change input text above"
          allowClear
          options={ROLE_OPTIONS}
        />
      </Form.Item>

      <Form.Item label="Department" name="departmentId">
        <Select
          placeholder="Select a option and change input text above"
          allowClear
          options={DEPARTMENT_OPTIONS}
        />
      </Form.Item>
    </Form>
  );
}

export default SignUp;
