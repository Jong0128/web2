import React from 'react';
import './LoginModal.css';
import { Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function LoginModal() {

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

        <div className='btnCon'>
          <Link to="/AgreementPage"><button className='signUpBtn'>회원가입</button></Link>
          <br/>
          <button className='loginBtn'>로그인</button>
        </div>

      </Form.Item>

    </Form>
  )
};

export default LoginModal