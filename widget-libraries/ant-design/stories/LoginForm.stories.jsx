import React from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.css";
import * as Antd from "antd";
import * as AntDesignIcons from "@ant-design/icons";

export default {
  title: "Ant Design/Login Form",
  component: Antd.Form,
  parameters: {
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
  argTypes: {
    maxWidth: {
      description: "Max width",
    },
    rememberMe: {
      description: "Remember me",
    },
    usernamePlaceholder: {
      description: "Username placeholder",
    },
    passwordPlaceholder: {
      description: "Password placeholder",
    },
    alert: {
      description: "Alert",
    },
  },
};

const Template = (args) => (
  <Antd.Form
    style={{
      maxWidth: args.maxWidth,

    }}
    name="normal_login"
    className="login-form"
    initialValues={{
      remember: args.rememberMe,
    }}
  >
    <Antd.Form.Item
      name="username"
      rules={[
        {
          required: true,
          message: args.alert,
        },
      ]}
    >
      <Antd.Input
        prefix={<AntDesignIcons.UserOutlined className="site-form-item-icon" />}
        placeholder={args.usernamePlaceholder}
      />
    </Antd.Form.Item>
    <Antd.Form.Item
      name="password"
      rules={[
        {
          required: true,
          message: args.alert,
        },
      ]}
    >
      <Antd.Input
        prefix={<AntDesignIcons.LockOutlined className="site-form-item-icon" />}
        type="password"
        placeholder={args.passwordPlaceholder}
      />
    </Antd.Form.Item>
    <Antd.Form.Item>
      <Antd.Form.Item name="remember" valuePropName="checked" noStyle>
        <Antd.Checkbox>Remember me</Antd.Checkbox>
      </Antd.Form.Item>

      <a
        style={{ float: "right" }}
        className="login-form-forgot"
        href="javascript:void(0)"
      >
        Forgot password
      </a>
    </Antd.Form.Item>

    <Antd.Form.Item>
      <Antd.Button
        type="primary"
        htmlType="submit"
        className="login-form-button"
        style={{ width: "100%" }}
      >
        Log in
      </Antd.Button>
      Or <a href="javascript:void(0)">register now!</a>
    </Antd.Form.Item>
  </Antd.Form>
);

export const Simple = Template.bind({});
Simple.args = {
  maxWidth: "250px",
  rememberMe: true,
  usernamePlaceholder: "Username",
  passwordPlaceholder: "Password",
  alert: "Please fill username & password",
};
