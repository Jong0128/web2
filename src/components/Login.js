import React from 'react';
import { Form, Input, Checkbox, Button } from 'antd';

function LoginForm({ onLoginFormSubmit }) {
  return (
    <Form onFinish={onLoginFormSubmit} style={{ padding: '16px' }}>
      <Form.Item
        label="이메일"
        name="email"
        rules={[{ required: true, message: '이메일을 입력하세요' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="비밀번호"
        name="password"
        rules={[{ required: true, message: '비밀번호를 입력하세요' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>로그인 상태 유지</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          로그인
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
