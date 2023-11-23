import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function LoginForm() {

  // 로그인 폼 디자인
  const loginFormStyle = {
    fontFamily: 'Noto Sans KR, sans-serif',
    width: 250,
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={loginFormStyle}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="아이디"
        name="username"
        rules={[
          {
            required: true,
            message: '아이디를 입력해주세요!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="비밀번호"
        name="password"
        rules={[
          {
            required: true,
            message: '비밀번호를 입력해주세요!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>로그인 상태 유지</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{ offset: 4, span: 16 }}
      >
        
        <Button type="primary" htmlType="submit">
          로그인
        </Button>

        <Button type="primary" htmlType="submit">
        <Link to="/AgreementPage">회원가입</Link>
        </Button>
        
      </Form.Item>
      
    </Form>
  )
};

export default LoginForm